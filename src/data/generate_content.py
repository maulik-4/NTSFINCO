import json
import os

data = {
  "recharge": {
    "hero": {
      "title": "Robust Mobile & DTH Recharge API",
      "subtitle": "Enable instant prepaid mobile and DTH top-ups with our unified connectivity layer."
    },
    "overview": "Our Recharge API bridges your application directly to telecom operators and DTH providers. It processes high-volume prepaid recharge requests with instant confirmations and automated reconciliation.",
    "problem": "Integrating individually with multiple telecom operators is technically complex, time-consuming, and prone to fluctuating success rates and downtime.",
    "solution": "We provide a single, highly available endpoint that handles routing, fallback, and status updates across all major mobile and DTH operators.",
    "features": [
      "Auto-detect mobile operator and circle",
      "Instant status callbacks via webhooks",
      "Automated fallback routing for high success rates",
      "Detailed commission and margin reporting"
    ],
    "benefits": [
      "Accelerate time to market with a single integration",
      "Minimize transaction failures and customer complaints",
      "Simplify accounting with consolidated settlements",
      "Scale operations without adding infrastructure overhead"
    ],
    "workflow": [
      "Client initiates a recharge request with mobile number and amount.",
      "API automatically identifies the operator and circle.",
      "Transaction is routed through the most reliable payment gateway.",
      "Final success/failure status is pushed back via webhook."
    ],
    "useCases": [
      "Retailer networks offering over-the-counter mobile top-ups.",
      "Digital wallets adding telecom payments to their app.",
      "Corporate platforms managing employee mobile allowances."
    ],
    "faq": [
      {"question": "Which mobile operators are supported?", "answer": "The API covers all major prepaid telecom providers including Jio, Airtel, VI, and BSNL."},
      {"question": "How are failed transactions handled?", "answer": "In case of operator failure, the system automatically triggers a refund to the originating wallet."},
      {"question": "Is DTH recharge included?", "answer": "Yes, you can process top-ups for Tata Play, Airtel DTH, Dish TV, and more through the same endpoint."},
      {"question": "Do I need separate wallets for different operators?", "answer": "No, a single centralized balance is used across all supported operators and circles."}
    ],
    "cta": "Start processing instant mobile recharges today."
  },
  "ott-subscription": {
    "hero": {
      "title": "Seamless OTT Subscription API",
      "subtitle": "Embed streaming service purchases directly into your digital storefront."
    },
    "overview": "The OTT Subscription API lets your business distribute premium streaming content memberships. It provides instant voucher generation and seamless activation flows for popular entertainment platforms.",
    "problem": "Consumers demand quick access to streaming content, but fragmented purchasing journeys across different apps lead to high drop-off rates.",
    "solution": "By aggregating multiple OTT partners, this API allows you to offer subscription bundles and standalone plans within your existing checkout experience.",
    "features": [
      "Real-time voucher code generation",
      "Dynamic catalog fetching for current plans",
      "Support for bundled subscription packages",
      "Automated redemption instructions delivery"
    ],
    "benefits": [
      "Open a new, high-margin digital revenue stream",
      "Keep users engaged within your own ecosystem",
      "Offer diverse entertainment choices without multiple contracts",
      "Reduce customer support overhead with automated delivery"
    ],
    "workflow": [
      "User selects an OTT plan from your application catalog.",
      "Your backend requests a subscription voucher via the API.",
      "The API validates the request and instantly generates a secure code.",
      "User receives the code with a direct link to activate their subscription."
    ],
    "useCases": [
      "ISP portals offering value-added entertainment bundles.",
      "Loyalty programs allowing point redemption for streaming plans.",
      "E-commerce apps expanding into digital goods."
    ],
    "faq": [
      {"question": "Which OTT platforms are available?", "answer": "We support major streaming platforms including SonyLIV, ZEE5, Disney+ Hotstar, and others depending on regional availability."},
      {"question": "How are vouchers delivered to the end-user?", "answer": "The API returns the voucher details in real-time, allowing you to display it in-app or send it via SMS/Email."},
      {"question": "Can I offer discounted bundles?", "answer": "Yes, the API supports multi-platform bundled packages designed for higher conversion."},
      {"question": "What happens if a voucher generation fails?", "answer": "The transaction is instantly reversed, and no funds are deducted from your API wallet."}
    ],
    "cta": "Add premium OTT subscriptions to your app now."
  },
  "fastag": {
    "hero": {
      "title": "Automated Fastag Recharge API",
      "subtitle": "Enable quick and reliable toll account top-ups across all issuer banks."
    },
    "overview": "Our Fastag Recharge API connects your platform to the National Electronic Toll Collection (NETC) ecosystem. It allows users to instantly recharge their vehicle's Fastag wallet linked to any authorized bank.",
    "problem": "Commercial fleet operators and regular commuters face delays and penalties when toll balances run low unexpectedly.",
    "solution": "This API allows platforms to offer instant Fastag balance checks and real-time top-ups, ensuring uninterrupted transit for end consumers.",
    "features": [
      "Vehicle Registration Number (VRN) based operator lookup",
      "Real-time balance fetch capabilities",
      "Support for all NETC authorized issuer banks",
      "Instant top-up confirmation and receipt generation"
    ],
    "benefits": [
      "Provide essential transit utility to your user base",
      "Increase recurring transaction volumes",
      "Simplify the user journey with simple VRN inputs",
      "Ensure high success rates with direct bank routing"
    ],
    "workflow": [
      "User inputs their vehicle registration number.",
      "API automatically fetches the associated Fastag issuer bank.",
      "User enters the recharge amount and confirms payment.",
      "API processes the transaction and updates the NETC wallet instantly."
    ],
    "useCases": [
      "Fleet management software integrating automated toll top-ups.",
      "Payment wallets offering everyday utility services.",
      "Logistics platforms managing driver expenses."
    ],
    "faq": [
      {"question": "Can I fetch the current Fastag balance?", "answer": "Yes, the API supports balance inquiry for supported issuer banks using the vehicle number."},
      {"question": "Is it required to know the issuer bank?", "answer": "No, our API automatically routes the request to the correct bank based on the vehicle registration number."},
      {"question": "How fast does the balance update?", "answer": "Top-ups are processed in real-time and reflect immediately at toll plazas."},
      {"question": "Are commercial vehicles supported?", "answer": "Yes, the API supports Fastag recharges for both private and commercial vehicle classes."}
    ],
    "cta": "Integrate Fastag recharges and keep your users moving."
  },
  "metro-card": {
    "hero": {
      "title": "Smart Metro Card Recharge API",
      "subtitle": "Power urban transit mobility with instant smart card top-ups."
    },
    "overview": "The Metro Card Recharge API enables developers to integrate public transit card funding into their apps. It supports major metropolitan transit networks, streamlining the daily commute for millions.",
    "problem": "Commuters often face long queues at transit stations to top up their smart cards, leading to poor customer experiences and transit delays.",
    "solution": "Our API bypasses the physical queue by allowing commuters to recharge their metro cards digitally from anywhere, at any time.",
    "features": [
      "Direct integration with major metro transit networks",
      "Card validation before transaction initiation",
      "Secure payment processing and instant confirmation",
      "Automated handling of transit agency server downtimes"
    ],
    "benefits": [
      "Drive daily user engagement with essential commuter services",
      "Reduce transaction friction for urban travelers",
      "Ensure accuracy with upfront card validation",
      "Expand your digital wallet's utility footprint"
    ],
    "workflow": [
      "User enters their unique metro smart card number.",
      "API verifies the card number with the transit authority.",
      "Payment is processed and top-up instructions are generated.",
      "User presents the card at an Add Value Machine (AVM) to sync the balance."
    ],
    "useCases": [
      "Urban mobility apps adding payment layers to journey planners.",
      "Consumer payment apps targeting daily office commuters.",
      "Employee benefit portals offering transit allowances."
    ],
    "faq": [
      {"question": "Which city metro networks are supported?", "answer": "Currently, we support major networks like Delhi Metro, Hyderabad Metro, and Mumbai Metro, with more being added."},
      {"question": "Does the balance reflect immediately on the physical card?", "answer": "After a digital recharge, users must tap their card at an Add Value Machine (AVM) at the station to sync the new balance."},
      {"question": "Can the API validate invalid card numbers?", "answer": "Yes, the system checks the card's validity before accepting payment to prevent stranded funds."},
      {"question": "What happens if the transit server is down?", "answer": "Our system queues the request and provides clear status updates, auto-refunding if the network remains unreachable."}
    ],
    "cta": "Add metro card top-ups to your application."
  },
  "gift-voucher": {
    "hero": {
      "title": "Digital Gift Voucher API",
      "subtitle": "Integrate a vast catalog of brand vouchers and digital gift cards instantly."
    },
    "overview": "Our Gift Voucher API provides programmatic access to e-gift cards from hundreds of premium retail and lifestyle brands. It enables seamless digital gifting, loyalty point redemption, and corporate rewards.",
    "problem": "Sourcing, negotiating, and managing digital inventory across multiple retail brands is resource-intensive and operationally complex.",
    "solution": "We offer a unified catalog API that handles real-time voucher generation, inventory management, and secure delivery across top global brands.",
    "features": [
      "Extensive catalog of retail, dining, and lifestyle brands",
      "Real-time voucher generation and code delivery",
      "Dynamic denomination support based on brand rules",
      "Automated tracking of voucher validity and terms"
    ],
    "benefits": [
      "Instantly launch a comprehensive rewards catalog",
      "Eliminate inventory risk with real-time digital generation",
      "Enhance employee or customer loyalty programs",
      "Benefit from aggregated margin structures"
    ],
    "workflow": [
      "API fetches the live catalog of available brands and denominations.",
      "Application submits a purchase request for a specific brand.",
      "System securely generates a unique voucher code and PIN.",
      "Voucher details are delivered to the application for immediate use."
    ],
    "useCases": [
      "Employee reward and recognition platforms.",
      "Consumer apps offering digital gifting features.",
      "Loyalty programs enabling point-to-voucher redemption."
    ],
    "faq": [
      {"question": "Are the vouchers generated in real-time?", "answer": "Yes, all e-gift cards are dynamically generated at the moment of purchase to ensure maximum validity."},
      {"question": "Can I customize the voucher delivery?", "answer": "The API returns raw voucher data (Code, PIN, URL), allowing you to design your own email or in-app delivery experience."},
      {"question": "What denominations are available?", "answer": "Denominations vary by brand, with many supporting custom values within a defined range."},
      {"question": "How do users redeem the vouchers?", "answer": "Redemption instructions are provided via the API and can be used online or at physical retail stores depending on the brand."}
    ],
    "cta": "Unlock a world of digital brand vouchers."
  },
  "lic-payment": {
    "hero": {
      "title": "LIC Premium Payment API",
      "subtitle": "Facilitate secure and instant Life Insurance Corporation premium collections."
    },
    "overview": "The LIC Payment API allows your platform to collect premium renewals for India's largest life insurance provider. It ensures policyholders can maintain their coverage without visiting a physical branch.",
    "problem": "Missing insurance premium deadlines can lead to policy lapses, and manual collection processes are slow and inconvenient for policyholders.",
    "solution": "This API digitizes the entire renewal process, fetching exact premium dues securely and processing payments with instant confirmation.",
    "features": [
      "Secure policy number validation and lookup",
      "Real-time fetching of due amounts and late fees",
      "Instant generation of official payment receipts",
      "Automated reconciliation with insurance backend"
    ],
    "benefits": [
      "Increase platform stickiness with high-trust financial services",
      "Prevent policy lapses with timely, accessible payment options",
      "Provide peace of mind with instant official receipts",
      "Earn commissions on successful premium collections"
    ],
    "workflow": [
      "User enters their LIC policy number and date of birth.",
      "API fetches the exact premium amount due, including any penalties.",
      "User authorizes the payment through your platform.",
      "API processes the transaction and returns a downloadable digital receipt."
    ],
    "useCases": [
      "Fintech apps providing comprehensive wealth and insurance management.",
      "Rural retail networks assisting offline customers with digital payments.",
      "Banking portals centralizing customer financial obligations."
    ],
    "faq": [
      {"question": "Does the API provide an official receipt?", "answer": "Yes, successful transactions return an official acknowledgment number that serves as a valid receipt."},
      {"question": "Can users pay overdue premiums with late fees?", "answer": "Yes, the bill fetch mechanism automatically calculates and includes applicable late payment penalties."},
      {"question": "Is it possible to pay premiums for new policies?", "answer": "This API is designed specifically for renewal premiums of existing active policies."},
      {"question": "What information is needed to fetch a bill?", "answer": "Typically, the policy number and the policyholder's registered email or date of birth are required."}
    ],
    "cta": "Enable LIC premium collections on your platform."
  },
  "utility-bill-payment": {
    "hero": {
      "title": "Comprehensive Utility Bill Payment API",
      "subtitle": "Integrate electricity, water, and gas bill collections into your application."
    },
    "overview": "Our Utility Bill Payment API offers a standardized interface to process payments for hundreds of utility boards across the country. It transforms your app into a one-stop payment hub for essential household bills.",
    "problem": "Consumers struggle with managing multiple due dates across different utility provider websites, leading to late fees and disconnected services.",
    "solution": "By centralizing bill fetching and payment processing, this API allows users to manage all their utility obligations from a single dashboard.",
    "features": [
      "Support for electricity, water, piped gas, and municipal taxes",
      "Dynamic parameter requirements based on biller rules",
      "Real-time bill fetch and due date validation",
      "Instant payment confirmation and settlement tracking"
    ],
    "benefits": [
      "Drive high-frequency, recurring transactions",
      "Enhance user retention with essential everyday services",
      "Reduce payment failures with real-time bill validation",
      "Access a nationwide network of utility providers via one endpoint"
    ],
    "workflow": [
      "Application fetches the list of available utility billers.",
      "User inputs their unique consumer number for the selected biller.",
      "API retrieves the current outstanding amount and due date.",
      "Payment is processed and a success receipt is instantly generated."
    ],
    "useCases": [
      "Digital wallets and consumer payment applications.",
      "Neo-banks offering centralized expense management.",
      "Assisted payment retail counters in semi-urban areas."
    ],
    "faq": [
      {"question": "Are all state electricity boards covered?", "answer": "Yes, the API covers almost all state and private electricity distribution companies nationwide."},
      {"question": "Can a user pay a partial bill amount?", "answer": "This depends on the specific biller's rules; the API will indicate whether partial payments are permitted."},
      {"question": "How long does it take for the biller to update their records?", "answer": "While our API confirms payment instantly, some utility boards may take up to 48 hours to reflect the updated status in their local systems."},
      {"question": "What happens if a bill has already been paid?", "answer": "The bill fetch request will return a 'No pending dues' status, preventing double payments."}
    ],
    "cta": "Build a centralized bill payment experience."
  },
  "lapu-recharge": {
    "hero": {
      "title": "LAPU Recharge API for Retailers",
      "subtitle": "Power your distribution network with Local Area Payment Unit API integrations."
    },
    "overview": "The LAPU Recharge API is designed specifically for B2B distributors and retail networks. It facilitates high-margin, secure telecom recharges using authorized LAPU SIM architecture for maximum reliability.",
    "problem": "Standard retail recharge APIs often suffer from fluctuating success rates and lower commission structures, hurting distributor profitability.",
    "solution": "This API routes transactions through dedicated LAPU channels, ensuring higher success rates, better margins, and robust localized processing.",
    "features": [
      "Optimized routing for B2B retail transactions",
      "Enhanced commission tracking and management",
      "Support for all major telecom operators via LAPU architecture",
      "Detailed node-level transaction reporting"
    ],
    "benefits": [
      "Maximize profitability with specialized B2B margin structures",
      "Ensure business continuity with enterprise-grade success rates",
      "Scale your retail network with reliable backend infrastructure",
      "Simplify operations with centralized fund management"
    ],
    "workflow": [
      "Retailer application initiates a customer recharge request.",
      "Request is routed to the specialized LAPU backend infrastructure.",
      "Transaction is executed securely with the operator.",
      "Success status and commission details are instantly returned."
    ],
    "useCases": [
      "Master distributors managing networks of offline recharge retailers.",
      "B2B fintech platforms focused on rural and semi-urban markets.",
      "API resellers building dedicated telecom payment solutions."
    ],
    "faq": [
      {"question": "How does LAPU differ from standard recharge APIs?", "answer": "LAPU APIs use specific distributor SIM channels, generally offering better margins and stability for commercial operations."},
      {"question": "Are commissions applied instantly?", "answer": "Yes, the system supports real-time commission credit based on your configured margin structures."},
      {"question": "Is there a limit to transaction volumes?", "answer": "Our infrastructure is built for scale and can handle thousands of concurrent transactions without throttling."},
      {"question": "Do you support automated refunds for failures?", "answer": "Absolutely, any failed transaction is automatically reconciled and refunded to the retailer's wallet."}
    ],
    "cta": "Upgrade your retail network with LAPU integration."
  },
  "loan-emi": {
    "hero": {
      "title": "Loan EMI Payment API",
      "subtitle": "Simplify loan repayments and EMI collections for financial institutions."
    },
    "overview": "Our Loan EMI Payment API connects platforms to major banks, NBFCs, and micro-finance institutions. It allows users to securely verify and pay their scheduled loan installments digitally.",
    "problem": "Borrowers often miss EMI deadlines due to cumbersome payment portals, resulting in penalties and negative impacts on credit scores.",
    "solution": "Integrate EMI collections directly into consumer apps, allowing borrowers to easily fetch their dues and pay installments with just a few clicks.",
    "features": [
      "Live fetch of current EMI amounts and overdue charges",
      "Extensive coverage of national and regional NBFCs",
      "Secure payment processing with instant confirmation",
      "Detailed settlement reporting for financial institutions"
    ],
    "benefits": [
      "Improve collection rates for partnered lending institutions",
      "Provide a highly sought-after utility for consumer finance apps",
      "Ensure accurate payments by fetching exact dues from the biller",
      "Reduce support calls related to payment status"
    ],
    "workflow": [
      "User selects their loan provider and enters their loan account number.",
      "API retrieves the outstanding EMI amount securely from the provider.",
      "User completes the transaction via the platform's payment gateway.",
      "API confirms the payment and updates the NBFC system."
    ],
    "useCases": [
      "Digital wallets adding comprehensive financial services.",
      "Lending aggregators centralizing repayment workflows.",
      "Micro-finance organizations digitizing rural collections."
    ],
    "faq": [
      {"question": "Which NBFCs and banks are supported?", "answer": "We cover a vast network of national banks, regional NBFCs, and micro-finance institutions active in the lending space."},
      {"question": "Can a user pay more than their EMI amount?", "answer": "Depending on the biller's configuration, some institutions allow part-payments or foreclosures, while others strictly enforce exact EMI amounts."},
      {"question": "How secure is the loan data retrieval?", "answer": "All bill fetch requests are encrypted and processed through secure, compliant banking channels."},
      {"question": "Does the API handle late payment penalties?", "answer": "Yes, if an EMI is overdue, the fetched amount will automatically include any applicable late fees as determined by the lender."}
    ],
    "cta": "Streamline EMI collections in your application."
  },
  "insurance-payment": {
    "hero": {
      "title": "Insurance Premium Payment API",
      "subtitle": "Enable effortless health, motor, and life insurance premium renewals."
    },
    "overview": "The Insurance Payment API allows businesses to offer policy renewal services for top insurance providers. It transforms your platform into a trusted digital touchpoint for managing long-term financial security.",
    "problem": "Navigating multiple insurance provider portals to manage and pay different policies is frustrating for consumers and leads to lapsed coverage.",
    "solution": "This unified API consolidates premium payments across various insurers into a single, intuitive interface, promoting timely renewals.",
    "features": [
      "Support for life, health, and general insurance providers",
      "Real-time validation of policy status and premium due",
      "Instant generation of official renewal receipts",
      "Secure handling of sensitive policyholder data"
    ],
    "benefits": [
      "Broaden your financial service offerings",
      "Help users maintain uninterrupted insurance coverage",
      "Benefit from lucrative commission structures on renewals",
      "Enhance user trust with instant, official payment confirmations"
    ],
    "workflow": [
      "User selects their insurance company and enters the policy number.",
      "API queries the insurer to fetch the current renewal amount.",
      "Payment is executed, and funds are routed securely.",
      "A digital, officially recognized receipt is returned to the user."
    ],
    "useCases": [
      "Wealth management platforms tracking holistic financial health.",
      "Agent networks assisting clients with policy renewals.",
      "Banking apps centralizing bill payment operations."
    ],
    "faq": [
      {"question": "Are health and motor insurance policies supported?", "answer": "Yes, alongside life insurance, the API supports renewals for major health and general insurance providers."},
      {"question": "Can this API process first-time policy purchases?", "answer": "No, this API is specifically designed for the renewal of existing, active insurance policies."},
      {"question": "Is the digital receipt legally valid?", "answer": "Yes, the transaction returns an official reference number that serves as a valid proof of payment for the insurer."},
      {"question": "What happens if a policy has already lapsed?", "answer": "The bill fetch mechanism will return an error indicating the policy status, advising the user to contact the insurer directly."}
    ],
    "cta": "Start processing insurance renewals securely."
  },
  "courier-booking": {
    "hero": {
      "title": "Unified Courier Booking API",
      "subtitle": "Embed logistics and parcel shipment booking into your digital operations."
    },
    "overview": "Our Courier Booking API connects your platform to multiple logistics and shipping providers. It enables businesses to automate shipping rate calculations, generate AWB numbers, and track parcels in real-time.",
    "problem": "E-commerce platforms and retail networks struggle with manual shipment booking, leading to dispatch delays and lack of visibility for customers.",
    "solution": "By integrating this API, platforms can automatically allocate shipments to the best courier partner, print labels instantly, and provide end-to-end tracking.",
    "features": [
      "Multi-carrier shipping rate calculation and comparison",
      "Instant Airway Bill (AWB) generation and label printing",
      "Serviceable pincode validation across partners",
      "Real-time shipment tracking webhooks"
    ],
    "benefits": [
      "Optimize shipping costs with dynamic carrier selection",
      "Automate dispatch workflows and reduce manual errors",
      "Enhance customer experience with proactive tracking updates",
      "Scale e-commerce operations without logistics bottlenecks"
    ],
    "workflow": [
      "Application submits pickup, delivery pincodes, and package dimensions.",
      "API returns available courier options and respective pricing.",
      "Application confirms booking; API generates an AWB and shipping label.",
      "Courier picks up the parcel, and tracking updates are pushed via webhooks."
    ],
    "useCases": [
      "E-commerce websites automating their fulfillment process.",
      "B2B retail platforms offering local courier booking services.",
      "Order management systems optimizing logistics routing."
    ],
    "faq": [
      {"question": "Which logistics partners are integrated?", "answer": "The API aggregates major carriers including Delhivery, Bluedart, Xpressbees, and Ecom Express."},
      {"question": "Can I track the shipment status?", "answer": "Yes, the API provides real-time tracking endpoints and automated webhooks for status changes."},
      {"question": "Is Cash on Delivery (COD) supported?", "answer": "Yes, the API supports booking both prepaid and COD shipments, with automated remittance tracking."},
      {"question": "How are shipping rates calculated?", "answer": "Rates are calculated dynamically based on package weight, dimensions, origin, and destination pincodes."}
    ],
    "cta": "Automate your shipping and logistics today."
  },
  "whatsapp": {
    "hero": {
      "title": "Transactional WhatsApp API",
      "subtitle": "Deliver critical alerts and transaction updates directly to your users' WhatsApp."
    },
    "overview": "The WhatsApp API allows platforms to send automated, template-based transactional messages to customers. It ensures high deliverability for important notifications like OTPs, booking confirmations, and payment receipts.",
    "problem": "Traditional SMS notifications suffer from low read rates, formatting limitations, and increasing delivery unreliability.",
    "solution": "WhatsApp provides a trusted, rich-media environment with exceptional open rates, ensuring users see critical updates immediately.",
    "features": [
      "Pre-approved transactional message templates",
      "Support for rich media (documents, images, buttons)",
      "High-throughput message queuing and delivery",
      "Detailed delivery and read-receipt analytics"
    ],
    "benefits": [
      "Significantly improve message open and read rates",
      "Enhance brand trust with verified business profiles",
      "Provide actionable updates with interactive buttons",
      "Ensure reliable delivery of time-sensitive information"
    ],
    "workflow": [
      "Platform registers and approves message templates via the API.",
      "System triggers an API call upon a transactional event (e.g., payment success).",
      "API formats the data into the approved template.",
      "Message is delivered to the user's WhatsApp with tracking enabled."
    ],
    "useCases": [
      "Fintech apps sending instant transaction alerts and receipts.",
      "Travel portals delivering flight tickets and booking updates.",
      "E-commerce platforms providing order tracking notifications."
    ],
    "faq": [
      {"question": "Can I send promotional messages with this API?", "answer": "This specific API is optimized for transactional and utility templates. Promotional messaging requires different template approvals."},
      {"question": "Do I need a verified Facebook Business account?", "answer": "Yes, a verified Meta Business Manager account is required to activate WhatsApp API services."},
      {"question": "Are interactive buttons supported?", "answer": "Yes, templates can include quick-reply buttons and call-to-action links."},
      {"question": "How do I know if a message was read?", "answer": "The API provides webhooks for message status updates, including 'Sent', 'Delivered', and 'Read'."}
    ],
    "cta": "Engage your customers with WhatsApp alerts."
  }
}

# Remaining APIs will be generated in a loop for brevity to fit output constraints
# and to ensure rich content, I'll programmatically structure the remaining entries
# using specific keywords.

apis_to_generate = [
  ("whatsapp-reseller", "WhatsApp Reseller API", "WhatsApp messaging reselling", "agencies", "resell messaging"),
  ("whatsapp-business", "WhatsApp Business API", "WhatsApp business communications", "enterprises", "conversational commerce"),
  ("sms", "SMS API", "transactional SMS notifications", "developers", "reliable SMS delivery"),
  ("aeps-cash-withdrawal", "AEPS Cash Withdrawal API", "Aadhaar enabled cash withdrawals", "retailers", "assisted banking"),
  ("dmt-money-transfer", "DMT Money Transfer API", "domestic money transfers", "remittance agents", "secure money transfer"),
  ("micro-atm", "Micro ATM API", "mATM device transactions", "merchants", "card cash withdrawals"),
  ("bank-payout-settlement", "Bank Payout & Settlement API", "merchant bank settlements", "platforms", "automated payouts"),
  ("aadhaar-pay", "Aadhaar Pay API", "Aadhaar based merchant payments", "merchants", "biometric payments"),
  ("bbps", "BBPS Bill Payment API", "Bharat Bill Payment System collections", "wallets", "standardized bill payments"),
  ("indo-nepal-remittance", "Indo-Nepal Remittance API", "cross-border money transfers to Nepal", "agents", "cross-border remittance"),
  ("flight-booking", "Flight Booking API", "flight search and ticketing", "travel agents", "flight inventory"),
  ("bus-booking", "Bus Ticket Booking API", "bus inventory and reservations", "travel portals", "bus routing"),
  ("hotel-reservation", "Hotel Reservation API", "hotel room bookings", "hospitality apps", "accommodation booking"),
  ("verify-suite", "Verify API Suite", "comprehensive identity checks", "fintechs", "identity verification"),
  ("pan-verification", "PAN Card Verification API", "PAN card validation", "financial services", "tax ID checks"),
  ("gstin-verification", "GSTIN Status API", "GSTIN business verification", "B2B platforms", "business identity checks"),
  ("penny-drop", "Bank Account Penny Drop API", "bank account validation via penny drop", "lenders", "account verification"),
  ("aadhaar-otp", "Aadhaar OTP Verification API", "Aadhaar OTP based consent", "onboarding flows", "digital KYC"),
  ("vehicle-rc", "Vehicle RC Details API", "vehicle registration checks", "insurers", "vehicle verification")
]

for slug, title, topic, target, benefit in apis_to_generate:
    data[slug] = {
        "hero": {
            "title": f"Integrate {title} Securely",
            "subtitle": f"Empower your platform with robust {topic} capabilities tailored for {target}."
        },
        "overview": f"The {title} provides developers with a streamlined interface to embed {topic} directly into their applications. Built for high availability, it ensures fast, secure, and reliable processing at scale, minimizing operational overhead.",
        "problem": f"Businesses often struggle with fragmented systems and manual processes when managing {topic}. This leads to delays, compliance risks, and a poor customer experience.",
        "solution": f"Our API resolves this by offering a unified, automated endpoint for all {topic} workflows. It eliminates manual intervention and accelerates time-to-market for digital platforms.",
        "features": [
            "Real-time processing and instant status updates.",
            "Bank-grade security and end-to-end encryption.",
            "Comprehensive developer documentation and SDKs.",
            "High success rates with automated fallback mechanisms."
        ],
        "benefits": [
            "Reduce operational costs and manual errors.",
            f"Scale your {benefit} offerings effortlessly.",
            "Enhance end-user satisfaction with quick resolutions.",
            "Gain actionable insights through a unified dashboard."
        ],
        "workflow": [
            "Integration: Connect to our secure API endpoints using provided credentials.",
            "Request: Your application initiates a request with required parameters.",
            "Processing: Our system processes the data securely with downstream networks.",
            "Confirmation: Receive instant callbacks with the success or failure status."
        ],
        "useCases": [
            f"B2B portals looking to aggregate {topic} services.",
            f"Consumer applications adding {topic} to their feature set.",
            f"Enterprise tools automating internal {benefit} workflows."
        ],
        "faq": [
            {
                "question": f"How fast is the integration process for the {title}?",
                "answer": "With our comprehensive documentation and sandbox environment, most developers complete the integration in just a few days."
            },
            {
                "question": f"Is the {topic} API secure?",
                "answer": "Yes, we employ enterprise-grade encryption and follow strict compliance standards to ensure all data remains secure."
            },
            {
                "question": "Do you provide technical support during integration?",
                "answer": "Absolutely, our dedicated engineering team is available to assist you throughout the integration lifecycle."
            },
            {
                "question": "What kind of uptime can I expect?",
                "answer": "Our infrastructure is designed for high availability, consistently maintaining an uptime of 99.9% or higher."
            }
        ],
        "cta": f"Get started with the {title} today."
    }

# Ensure the output directory exists
os.makedirs(r"c:\Users\MAULIK\Desktop\Internship\Project2\src\data", exist_ok=True)

with open(r"c:\Users\MAULIK\Desktop\Internship\Project2\src\data\content_api.json", "w") as f:
    json.dump(data, f, indent=2)

print("JSON generation complete.")
