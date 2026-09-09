const makeItems = (category, entries) => entries.map(([slug, title, description]) => ({
  slug,
  title,
  description,
  category,
  route: `/${category}/${slug}`,
}))

export const softwareCategories = [
  {
    name: 'Recharge software',
    items: makeItems('software', [
      ['b2b-mobile-recharge', 'B2B Mobile Recharge', 'Operate retailer, distributor and wallet workflows from one control layer.'],
      ['b2c-recharge', 'B2C Recharge Portal', 'A focused consumer recharge experience with transparent transaction states.'],
      ['multi-recharge', 'Multi Recharge Platform', 'Unify mobile, DTH, data and utility journeys for growing networks.'],
      ['api-reselling', 'API Reselling Software', 'Package your infrastructure into a controlled partner distribution channel.'],
      ['utility-bill-payment', 'Utility Bill Payments', 'Manage biller discovery, collections and settlement-ready records.'],
      ['bbps', 'BBPS Operations', 'Give teams a clean command centre for bill payment operations.'],
    ]),
  },
  {
    name: 'Banking software',
    items: makeItems('software', [
      ['aeps', 'AEPS Retailer Platform', 'Coordinate assisted banking workflows with clear agent-level visibility.'],
      ['dmt', 'Domestic Money Transfer', 'Build a dependable transfer desk for assisted remittance operations.'],
      ['aadhaar-pay', 'Aadhaar Pay Merchant', 'Support merchant-led payment flows with adaptable controls.'],
      ['micro-atm', 'Micro ATM / mATM POS', 'Connect assisted cash access with operational oversight.'],
      ['bank-payout-settlement', 'Bank Payout & Settlement', 'Orchestrate pay-outs, reconciliation and exception handling.'],
    ]),
  },
  {
    name: 'Verification & CRM',
    items: makeItems('software', [
      ['verify-platform', 'Verify API Platform', 'Bring identity and financial checks into a manageable workspace.'],
      ['background-verification', 'Background Verification', 'Structure review queues and evidence for faster decisions.'],
      ['fintech-custom-development', 'Fintech Custom Development', 'Shape a platform around the workflows your business actually runs.'],
      ['crm', 'CRM Software Solutions', 'Keep leads, relationships and follow-ups visible to every team.'],
      ['inventory-pos', 'Inventory POS Billing', 'Bring inventory, billing and customer records into one operating view.'],
    ]),
  },
]

export const apiGroups = [
  {
    name: 'Recharge APIs',
    items: makeItems('api', [
      ['recharge', 'Recharge API', 'A developer-ready layer for mobile and data recharge journeys.'], ['ott-subscription', 'OTT Subscription API', 'Connect subscription purchases to your payment workflow.'], ['fastag', 'Fastag Recharge API', 'Support fastag balance and recharge experiences.'], ['metro-card', 'Metro Card Recharge API', 'Extend your product into everyday transit payments.'], ['gift-voucher', 'Gift Voucher API', 'Add voucher discovery and purchase flows.'], ['lic-payment', 'LIC Payment API', 'Connect premium payment journeys with clear status handling.'], ['utility-bill-payment', 'Utility Bill Payment API', 'Build bill payment into your application.'], ['lapu-recharge', 'LAPU Recharge API', 'Support partner-led recharge distribution.'], ['loan-emi', 'Loan EMI Payment API', 'Create payment paths for scheduled financial obligations.'], ['insurance-payment', 'Insurance Payment API', 'Keep policy payment flows traceable.'], ['courier-booking', 'Courier Booking API', 'Add shipment booking to a broader commerce journey.'], ['whatsapp', 'WhatsApp API', 'Connect transactional workflows with messaging.'], ['whatsapp-reseller', 'WhatsApp Reseller API', 'Offer messaging capabilities through a partner model.'], ['whatsapp-business', 'WhatsApp Business API', 'Build business communication flows into your stack.'], ['sms', 'SMS API', 'Deliver event notifications with an integration-first interface.'],
    ]),
  },
  {
    name: 'Fintech APIs',
    items: makeItems('api', [
      ['aeps-cash-withdrawal', 'AEPS Cash Withdrawal API', 'Connect assisted cash withdrawal workflows.'], ['dmt-money-transfer', 'DMT Money Transfer API', 'Build domestic remittance into your product.'], ['micro-atm', 'Micro ATM API', 'Support assisted cash access at the edge.'], ['bank-payout-settlement', 'Bank Payout & Settlement API', 'Create programmable payout and settlement flows.'], ['aadhaar-pay', 'Aadhaar Pay API', 'Extend merchant payment capabilities.'], ['bbps', 'BBPS Bill Payment API', 'Connect bill collection to your application.'], ['indo-nepal-remittance', 'Indo-Nepal Remittance API', 'Support cross-border remittance workflows.'],
    ]),
  },
  {
    name: 'Travel APIs',
    items: makeItems('api', [
      ['flight-booking', 'Flight Booking API', 'Compose flight search and booking journeys.'], ['bus-booking', 'Bus Ticket Booking API', 'Connect bus inventory and booking experiences.'], ['hotel-reservation', 'Hotel Reservation API', 'Add accommodation search and reservation flows.'],
    ]),
  },
  {
    name: 'Verification APIs',
    items: makeItems('api', [
      ['verify-suite', 'Verify API Suite', 'A unified entry point for verification workflows.'], ['pan-verification', 'PAN Card Verification API', 'Add PAN checks to onboarding and review.'], ['gstin-verification', 'GSTIN Status API', 'Validate business registration details.'], ['penny-drop', 'Bank Account Penny Drop API', 'Support account ownership checks.'], ['aadhaar-otp', 'Aadhaar OTP Verification API', 'Build consent-led identity verification flows.'], ['vehicle-rc', 'Vehicle RC Details API', 'Bring vehicle records into eligible workflows.'],
    ]),
  },
]

export const serviceItems = makeItems('services', [
  ['android-development', 'Android Application Development', 'Build reliable mobile experiences around real operating workflows.'], ['pwa-development', 'Progressive Web Applications', 'Ship fast, installable product experiences without a heavy app footprint.'], ['b2b-b2c-platforms', 'B2B, B2C & Reseller Platforms', 'Design platforms for customers, operators and partner networks.'], ['hybrid-development', 'Hybrid Application Development', 'Extend one product vision across mobile platforms.'], ['mobile-game-development', 'Mobile Game Development', 'Create polished, responsive game experiences.'], ['graphic-design', 'Graphic & Logo Design', 'Give your product a clear visual language.'], ['web-design', 'Web Designing Services', 'Turn complex offerings into focused digital experiences.'], ['cms-development', 'CMS Website Development', 'Give teams control of the content they publish.'], ['digital-marketing', 'Digital Marketing Solutions', 'Connect campaigns to measurable acquisition work.'], ['seo-smo', 'SEO & SMO Services', 'Improve discoverability with durable content and technical foundations.'], ['google-ppc', 'Google PPC Services', 'Build focused acquisition campaigns around intent.'], ['web-development', 'Website Development', 'Build fast, accessible web products for your customers.'], ['linux-windows-hosting', 'Linux & Windows Hosting', 'Choose hosting operations that match your application needs.'], ['reseller-hosting', 'Reseller Hosting', 'Create a managed hosting offer for your network.'], ['vps-dedicated-hosting', 'VPS & Dedicated Hosting', 'Scale into more controlled infrastructure.'], ['payin-payout', 'Payin and Payout API', 'Connect money movement workflows with a clear integration layer.'], ['ecommerce', 'E-Commerce Shopping Website', 'Build commerce journeys that support catalog to checkout.'],
])

export const industryItems = makeItems('industries', [
  ['recharge-bill-payments', 'Recharge & Bill Payments', 'Design resilient everyday payment experiences for broad networks.'], ['banking-fintech', 'Banking & Fintech', 'Build products around trust, traceability and financial access.'], ['neobanking', 'Neo-Banking Platforms', 'Compose modern account and money movement experiences.'], ['ecommerce', 'E-commerce Shopping', 'Connect commerce operations to payment and customer workflows.'], ['retail', 'Retail & Merchant Services', 'Give merchant teams the tools to serve customers quickly.'], ['identity-risk', 'Identity Verification & Risk', 'Make onboarding and review more observable.'], ['b2b', 'Business to Business', 'Support partner operations with role-aware product design.'], ['corporate', 'Corporate Sector', 'Structure financial workflows for distributed teams.'], ['hrms-payroll', 'HRMS & Payroll', 'Build dependable employee and payroll journeys.'], ['sales-marketing', 'Sales & Marketing', 'Connect prospect, campaign and revenue workflows.'], ['travel', 'Travel & Hospitality', 'Compose booking, payment and service experiences.'], ['education', 'Education Sector', 'Support fee, identity and operational journeys.'], ['logistics', 'Transportation & Logistics', 'Make movement, collection and tracking more connected.'], ['healthcare', 'Healthcare Sector', 'Design sensitive, permissioned operational workflows.'], ['manufacturing', 'Manufacturing Sector', 'Bring finance and operations closer together.'],
])

export const allSoftware = softwareCategories.flatMap((group) => group.items)
export const allApis = apiGroups.flatMap((group) => group.items)

export const findCatalogItem = (type, slug) => {
  const source = type === 'software' ? allSoftware : type === 'api' ? allApis : type === 'services' ? serviceItems : industryItems
  return source.find((item) => item.slug === slug)
}
