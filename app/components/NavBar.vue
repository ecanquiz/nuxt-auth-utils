<script setup lang="ts">
const { loggedIn, user, session, fetch, clear, openInPopup } = useUserSession()

// Llama al endpoint de login cuando el componente se monta
onMounted(async () => {
  await $fetch('/api/auth/login')
  await fetch() // Actualiza la sesión en el cliente
})
</script>

<template>
  <UCard class="flex justify-end">
    <div v-if="loggedIn" class="flex items-center gap-4">
        {{ user?.login }}
        <UButton @click="clear(); navigateTo('/login')">Logout</UButton>        
    </div>
    <div v-else>
      <UButton as-child>
        <NuxtLink to="/login">
          Login
        </NuxtLink>        
      </UButton>
    </div>
  </UCard>
</template>
