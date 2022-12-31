<script>
  import { page } from '$app/stores';
  import './styles.css';
  import '../app.css';
</script>

<footer class="tooltip tooltip-top" data-tip="Privacy Policy">
    <p aria-current={$page.url.pathname === '/privacy' ? 'page' : undefined}>
      <a href="/privacy">
        <strong
          style=" color: transparent; 
            background-clip: text;
            -webkit-background-clip: text;
            background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
        >
          © 2023
        </strong>
        <strong
          style=" color: transparent;
            background-clip: text;
            -webkit-background-clip: text;background-image: url('https://media2.giphy.com/media/bTDdkhpX34Hwp1eaiS/200w.webp?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=200w.webp&ct=g');"
        >
          all rights reserved.
        </strong>
      </a>
    </p>
  </footer>

	<style>
		footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
	@media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
	</style>