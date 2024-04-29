<script setup lang="ts">
definePageMeta({
  layout: "contact",
});

useSeoMeta({
  title: "Contact",
});

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Tell me your name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    placeholder: "What do you want to talk about?",
  },
];

const validate = (state: any) => {
  const errors = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.name) errors.push({ path: "name", message: "Name is required" });
  if (!state.message)
    errors.push({ path: "message", message: "A Message is required" });
  return errors;
};

function onSubmit(data: any) {
  console.log("Submitted", data);

  const mailText =
    "mailto:mail@janpetry.de?subject=Contact Form via JanPetry.de from " +
    data.name +
    " (" +
    data.email +
    ")" +
    "&body=" +
    data.message;
  window.location.href = mailText;
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="Contact Me"
      align="top"
      icon="i-heroicons-envelope"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{
        trailingIcon: 'i-heroicons-arrow-right-20-solid',
        label: 'Send Message',
      }"
      @submit="onSubmit"
    >
    </UAuthForm>
  </UCard>
</template>
