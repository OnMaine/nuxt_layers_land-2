export default defineNuxtPlugin(() => {

  const $customFetch = $fetch.create({
    headers: {
      Custom: 'header from app'
    },
  })
  
  return {
    provide: {
      customFetch: $customFetch
    }
  }
})