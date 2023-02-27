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

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="avatar">
      <div
        class="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img src={pfp_closeup} alt="2017 - Kin NYC" />
      </div>
    </div>
    <div class="text-center ">
      <h1 class="text-5xl font-bold">
        <code
          style="color: transparent; background-clip: text; -webkit-background-clip: text; 
                background-image: url('https://i.giphy.com/media/3og0IH1Y3JD3Ybwphe/giphy.webp');"
        >
          Let's
        </code>
        <code
          style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url('https://i.giphy.com/media/5xtDarAhnwnse0JQP28/giphy.webp');"
        >
          Connect
        </code>
      </h1>
      <p class="py-6">
        Fill the form if you want to connect. Thanks for viewing this site.
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form on:submit|preventDefault={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="7a2c25e5-667c-4619-9971-c1324332cdd0"
          />
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">What is your name ❓</span>
            </label>
            <input
              type="text"
              placeholder="Insert name here"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">What is your email ❓</span>
            </label>
            <input
              type="text"
              placeholder="email@email.here"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
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
              class="input input-bordered "
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
        <div>{status}</div>
      </div>
    </div>
  </div>
</div>

<!-- 
    
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

      
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div> -->
