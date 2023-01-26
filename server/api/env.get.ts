export default defineEventHandler(() => {
  if (process.env.ENVIRONMENT === 'production') {
    return 'production'
  }
  if (process.env.ENVIRONMENT === 'test') {
    return 'test'
  }
  return 'development'
})
