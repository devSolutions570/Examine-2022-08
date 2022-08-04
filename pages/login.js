export default function IndexPage() {
  return (
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl w-full space-y-8 custom-form">
    <div>
      <h2 class="text-center text-3xl font-extrabold text-gray-900  text-c">Welcome back! 👋</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 sub-c">Let's build someting great</a>
      </p>
    </div>
    <div class='alternet__signup flex justify-center'>
      <img class="h-8 w-auto sm:h-10" src="/resources/images/google.png" alt="logo"/>
      <img class="h-8 w-auto sm:h-10" src="/resources/images/apple.png" alt="logo"/>
      <img class="h-8 w-auto sm:h-10" src="/resources/images/facebook.png" alt="logo"/>
    </div>
    <div class='flex justify-center'>
      <img src="/resources/images/hr.png"/>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input-field-c" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input-field-c" placeholder="Password"/>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 c-submit">
          Login
        </button>
      </div>

      <div class='note-c'>
        <h3><b>Click here</b>
          <br/>
            to sign up for the complete Examine Membership. Includes a free 2 week trial!</h3>
      </div>
    </form>
  </div>
</div>
  );
}
