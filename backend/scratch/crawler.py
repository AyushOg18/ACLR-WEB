import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import json
import ssl
import time

# Create unverified SSL context just in case there are certificate issues
ssl_ctx = ssl._create_unverified_context()

SERVICE_URLS = [
    # SAP
    "https://acceleronsolutions.io/service/sap-hxm-cx/",
    "https://acceleronsolutions.io/service/sap-analytics/",
    "https://acceleronsolutions.io/service/migration-to-cloud/",
    "https://acceleronsolutions.io/service/sap-managed-services/",
    "https://acceleronsolutions.io/service/rise-with-sap/",
    "https://acceleronsolutions.io/service/sap-s-4-hana-transformation/",
    # Zoho Suite
    "https://acceleronsolutions.io/service/work-flow-automation/",
    "https://acceleronsolutions.io/service/business-intellegence/",
    "https://acceleronsolutions.io/service/sales-marketing/",
    "https://acceleronsolutions.io/service/human-resource-management-system/",
    "https://acceleronsolutions.io/service/finance-and-accounts/",
    "https://acceleronsolutions.io/service/business-process-re-engineering/",
    # Software Development & Automation
    "https://acceleronsolutions.io/service/automation-solutions/",
    "https://acceleronsolutions.io/service/software-development/",
    "https://acceleronsolutions.io/service/web-development/",
    "https://acceleronsolutions.io/service/mobile-web-application-development/",
    # IT Infrastructure
    "https://acceleronsolutions.io/service/infrastructure-annual-maintenance-contract-amc/",
    "https://acceleronsolutions.io/service/network-setup-monitoring/",
    "https://acceleronsolutions.io/service/cloud-infrastructure-management/",
    "https://acceleronsolutions.io/service/email-management/",
    # Salesforce
    "https://acceleronsolutions.io/service/salesforce-migration/",
    "https://acceleronsolutions.io/service/implementation-ams-ads/",
    "https://acceleronsolutions.io/service/lightning-platform/",
    "https://acceleronsolutions.io/service/salesforce-service-cloud/",
    "https://acceleronsolutions.io/service/salesforce-sales-cloud/",
    "https://acceleronsolutions.io/service/salesforce-cpq/",
    # Cyber Security
    "https://acceleronsolutions.io/service/iso-27001-certification/",
    "https://acceleronsolutions.io/service/cyber-security-awareness-programs/",
    "https://acceleronsolutions.io/service/vulnerability-assessment-and-penetration-testing-vapt/",
    "https://acceleronsolutions.io/service/email-security/",
    "https://acceleronsolutions.io/service/detection-on-demand/",
    "https://acceleronsolutions.io/service/network-security-and-forensics/",
    "https://acceleronsolutions.io/service/endpoint-security/",
    # CXO Advisory / Analytics / Other
    "https://acceleronsolutions.io/service/drive-business-excellence-via-technology/",
    "https://acceleronsolutions.io/service/digital-transformation-guidance/",
    "https://acceleronsolutions.io/service/it-roadmap-creation/",
    "https://acceleronsolutions.io/service/cxo-advisory-for-strategic-it-investment/",
    "https://acceleronsolutions.io/service/data-lake-solutions/",
    "https://acceleronsolutions.io/service/data-visualization-reporting-services/",
    "https://acceleronsolutions.io/service/enterprise-data-warehousing-services/",
    "https://acceleronsolutions.io/service/advisory-services/"
]

def fetch_page(url):
    print(f"Fetching: {url}")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_ctx, timeout=15) as response:
            return response.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def parse_service_page(html, url):
    if not html:
        return None
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract Title (often in h1 or h2 or document title)
    title_el = soup.find('h1') or soup.find('h2')
    title = title_el.text.strip() if title_el else "Service Subpage"
    
    # Fallback title if it's too generic
    if title.lower() in ["services", "home", "about us"] or len(title) < 2:
        title_tag = soup.find('title')
        if title_tag:
            title = title_tag.text.replace(" - Acceleron Solutions", "").strip()

    # Extract Slug
    slug = url.rstrip('/').split('/')[-1]

    # Tagline/Intro paragraph
    # It's usually the first big paragraph or the element right after h1
    tagline = ""
    intro_div = soup.find(class_="elementor-text-editor") or soup.find(class_="entry-content")
    if intro_div:
        first_p = intro_div.find('p')
        if first_p:
            tagline = first_p.text.strip()

    # If tagline is empty, look for any paragraph that is not empty
    if not tagline:
        all_ps = soup.find_all('p')
        for p in all_ps:
            txt = p.text.strip()
            if len(txt) > 40:
                tagline = txt
                break

    # Extract detailed content sections
    description = ""
    detail_paragraphs = []
    benefits = []
    faqs = []

    # Let's inspect headings to see if they look like detailed descriptions
    content_headers = soup.find_all(['h2', 'h3', 'h4'])
    for h in content_headers:
        header_text = h.text.strip()
        if "similar" in header_text.lower() or "other" in header_text.lower():
            continue
        
        # Check if it's a detailed description header
        if len(header_text) > 10 and not h.find('a'):
            # Fetch paragraphs following this header
            sibling = h.find_next_sibling()
            while sibling and sibling.name in ['p', 'ul', 'ol', 'div']:
                if sibling.name == 'p':
                    txt = sibling.text.strip()
                    if txt:
                        detail_paragraphs.append(txt)
                elif sibling.name in ['ul', 'ol']:
                    for li in sibling.find_all('li'):
                        li_txt = li.text.strip()
                        if li_txt:
                            benefits.append(li_txt)
                sibling = sibling.find_next_sibling()
            
            if detail_paragraphs:
                description = " ".join(detail_paragraphs)
                break

    # If description is still empty, look at all paragraphs
    if not description:
        all_p_texts = [p.text.strip() for p in soup.find_all('p') if len(p.text.strip()) > 50]
        if all_p_texts:
            # First is probably tagline, second/third is description
            if len(all_p_texts) > 1:
                description = " ".join(all_p_texts[1:4])
            else:
                description = all_p_texts[0]

    # Look for value-added lists/benefits (often in list items)
    if not benefits:
        for ul in soup.find_all('ul'):
            # Only list items that don't have links (to exclude footer/nav)
            lis = ul.find_all('li')
            for li in lis:
                if not li.find('a') and len(li.text.strip()) > 10:
                    benefits.append(li.text.strip())

    # Filter out navigation elements from benefits
    benefits = [b for b in benefits if len(b) < 150 and not b.startswith("SAP") and not b.startswith("Salesforce")][:10]

    # Extract FAQs
    # FAQs are often in accordion panels or contain a question mark
    faq_elements = soup.find_all(class_=["elementor-toggle-item", "elementor-accordion-item"])
    if faq_elements:
        for item in faq_elements:
            q_el = item.find(class_=["elementor-toggle-title", "elementor-accordion-title"])
            a_el = item.find(class_=["elementor-toggle-content", "elementor-accordion-content"])
            if q_el and a_el:
                faqs.append({
                    "question": q_el.text.strip(),
                    "answer": a_el.text.strip()
                })
    else:
        # Fallback: scan for elements with questions
        all_elements = soup.find_all(['p', 'h3', 'h4', 'div'])
        for el in all_elements:
            text = el.text.strip()
            if "?" in text and len(text) < 120 and (text.startswith("1") or text.startswith("2") or text.startswith("3") or text.startswith("4") or text.startswith("5") or text.startswith("What") or text.startswith("How") or text.startswith("Why")):
                # Find answer in next sibling
                ans = el.find_next(['p', 'div'])
                if ans:
                    faqs.append({
                        "question": text,
                        "answer": ans.text.strip()
                    })

    # Cleanup duplicate FAQs
    seen_q = set()
    unique_faqs = []
    for f in faqs:
        q = f["question"]
        if q not in seen_q:
            seen_q.add(q)
            unique_faqs.append(f)

    # Detect parent category based on url or content
    category = "General"
    if "sap-" in slug or "migration-to-cloud" in slug or "rise-with" in slug or "hana-" in slug:
        category = "SAP"
    elif "salesforce" in slug or "lightning" in slug or "implementation-ams-ads" in slug:
        category = "Salesforce"
    elif "zoho" in slug or "work-flow-" in slug or "business-intellegence" in slug or "sales-marketing" in slug or "human-resource-" in slug or "finance-and-" in slug or "business-process-" in slug:
        category = "Zoho Suite"
    elif "cyber-security" in slug or "vulnerability-" in slug or "security-" in slug or "iso-27001" in slug or "endpoint-" in slug or "detection-on-" in slug:
        category = "Cyber Security"
    elif "infrastructure" in slug or "network-" in slug or "email-" in slug or "amc" in slug:
        category = "IT Infrastructure"
    elif "analytics" in slug or "data-" in slug or "warehousing" in slug:
        category = "Analytics"
    elif "software-" in slug or "web-" in slug or "mobile-" in slug or "automation-" in slug:
        category = "Software Development"
    elif "advisory" in slug or "guidance" in slug or "roadmap" in slug or "excellence" in slug:
        category = "CXO Advisory"

    return {
        "slug": slug,
        "title": title,
        "category": category,
        "tagline": tagline,
        "description": description or tagline,
        "benefits": benefits,
        "faqs": unique_faqs,
        "original_url": url
    }

def main():
    results = {}
    for url in SERVICE_URLS:
        html = fetch_page(url)
        if html:
            data = parse_service_page(html, url)
            if data:
                results[data["slug"]] = data
                print(f"Successfully scraped: {data['title']} ({data['category']})")
        time.sleep(0.5) # Politeness delay
        
    # Write to services.json in the Next.js frontend
    target_path = "../acceleron-solutions/src/lib/services.json"
    with open(target_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Scrape complete. Saved {len(results)} services to {target_path}")

if __name__ == "__main__":
    main()
