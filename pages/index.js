export default function IndexPage() {
  return (
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl w-full space-y-8 custom-form">
    <div>
      <h2 class="text-center text-3xl font-extrabold text-gray-900 text-c">Create your account</h2>
      <p class="text-center text-sm text-gray-600 mt-c">
        <a href="#" class="font-medium text-indigo-600 sub-c">It’s Includes a free 2 week trial!</a>
      </p>
    </div>
    <div class='alternet__signup flex justify-center signup-mt'>
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
          <label for="name" class="sr-only">Full Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input-field-c" placeholder="Full Name"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input-field-c" placeholder="Email address"/>
        </div>
        <div class='relative'>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm input-field-c" placeholder="Password"/>
          <p class='absolute password-show'>SHOW</p>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 c-submit">
          Start your 2-week free trial!
        </button>
      </div>
    </form>
  </div>
</div>
    
  );
}
