export async function submitContactForm(payload) {
  if (!payload.name || !payload.email || !payload.message) {
    throw new Error('Please complete the required fields.')
  }
  await new Promise((resolve) => setTimeout(resolve, 650))
  return { queued: false, payload }
}
