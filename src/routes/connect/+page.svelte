<script>
  import pfp_closeup from '$lib/images/pic3.png';

  let status = '';
  const handleSubmit = async (/** @type any **/ data) => {
    status = 'Submitting...';
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = result.message || 'Success';
    }
  };
</script>

<svelte:head>
  <title>Let's connect</title>
</svelte:head>

<br />
<br />
<div class="text-column">
  <div
    class="max-w-md mx-auto justify-center items-center flex flex-col lg:flex-row"
  >
    <div class="space-y-4 text-gray-700 text-2xl sm:text-2xl lg:text-3xl">
      <div class="pt-6 font-bold sm:text-2xl lg:text-2xl">
        <h1
          class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
        >
          <strong
            style=" color: transparent; 
                    background-clip: text;
            -webkit-background-clip: text;
            background-image: url('https://media2.giphy.com/media/JlVxiw2MrW4DwKeG4e/giphy.gif?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=giphy.gif&ct=g');"
          >
            Let's
          </strong>
          <strong
            style=" color: transparent;
                    background-clip: text;
            -webkit-background-clip: text;background-image: url('https://media2.giphy.com/media/bTDdkhpX34Hwp1eaiS/200w.webp?cid=ecf05e47havsfdo7vnub33cofwhw8suyhqvh1e5t1wr1veb4&rid=200w.webp&ct=g');"
          >
            connect
          </strong>
        </h1>
        <div class="text-center">
          <p class="text-white-400 dark:text-gray-400">
            Fill up the form below to send me a message. 📭
          </p>
        </div>
      </div>
    </div>
    <img
      class="h-48 sm:h-48 lg:h-64 rounded-full mb-4 lg:mb-0"
      src={pfp_closeup}
      alt="2018"
    />
  </div>
  <div class="my-4 p-5">
    <div class="text-center m-7">
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="7a2c25e5-667c-4619-9971-c1324332cdd0"
        />
        <div class="flex flex-row">
          <label for="name" class="font-bold py-2 px-4 rounded-full">
            What is your name ❓
          </label>
          <input
            type="text"
            name="name"
            required
            class="rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"
          />
        </div>
        <br />
        <div class="flex flex-row">
          <label for="email" class="font-bold py-2 px-4 rounded-full">
            What is your email ❓
          </label>
          <input
            type="email"
            name="email"
            required
            class="rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"
          />
        </div>
        <br />
        <div class="flex flex-row">
          <label
            for="message"
            class="text-white-900 font-bold py-2 px-4 rounded-full"
          >
            Insert message here 📝
          </label>
          <textarea
            name="message"
            required
            rows="3"
            class="rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"
          />
        </div>
        <br />
        <input
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        />
      </form>

      <div>{status}</div>
    </div>
  </div>
</div>

<div class="relative py-3 sm:max-w-xl sm:mx-auto">
  <div
    class="max-w-md mx-auto justify-center items-center flex flex-col lg:flex-row"
  />
</div>
