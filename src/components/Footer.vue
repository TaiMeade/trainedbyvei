<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; {{ new Date().getFullYear() }} Trained by Vei</span>
      <div class="footer-links">
        <a href="https://www.instagram.com/veitrains" target="_blank" rel="noopener" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto:m.isbell2004@gmail.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple footer
</script>

<style scoped>
.footer {
  background: #222;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.footer-links a {
  color: #fff;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: #ff9800;
}
</style>