import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-800 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
    <div class="mb-4 md:mb-0">
      <h3 class="text-lg font-bold text-gray-100 mb-2">Wonder Chef</h3>
      <ul class="flex flex-col text-gray-400">
        <li class="mb-2">
          <a href="#" class="hover:text-gray-300">HOME</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-gray-300">BLOG</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-gray-300">MENUS</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-gray-300">ABOUT US</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-gray-300">OUR CHEFS</a>
        </li>
        <li>
          <a href="#" class="hover:text-gray-300">CONTACT</a>
        </li>
      </ul>
    </div>
    <div class="text-gray-400 mb-4 md:mb-0">
      <p class="mb-2">Contact Us:</p>
      <p class="mb-2">123 Main St.</p>
      <p class="mb-2">New York, NY 10001</p>

      
      <ul class="list-disc pl-4">
        <li class="mb-2">info@chefwebsite.com</li>
        <li class="mb-2">1-800-123-4567</li>
      </ul>
    </div>
    <div class="text-gray-400 mb-4 md:mb-0">
    <p class="mb-2">Find Us:</p>
      <ul class="list-disc pl-4">
        <li class="mb-2">Facebook</li>
        <li class="mb-2">Twitter</li>
        <li class="mb-2">Instagram</li>
        <li>YouTube</li>
      </ul>
    </div>
    <div class="text-gray-400 text-center">
      <p>© 2023 Chef Website. All rights reserved.</p>
      <p>
        <a href="#" class="hover:text-gray-300">Terms &amp; Conditions</a>
      </p>
      <p>
        <a href="#" class="hover:text-gray-300">Privacy Policy</a>
      </p>
    </div>
  </div>
</footer>


        </div>
    );
};

export default Footer;