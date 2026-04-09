document.addEventListener("DOMContentLoaded", () => {

  /* ===== SKILL ICON CLICK JUMP ===== */
  const skillIcons = document.querySelectorAll(".skill-icon");

  skillIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.remove("jump");
      void icon.offsetWidth; // force reflow
      icon.classList.add("jump");
    });
  });

  /* ===== 3D CARD TILT ===== */
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -20;
      const rotateY = ((x / rect.width) - 0.5) * 20;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });

  /* ===== CONTACT SLIDE-IN ON SCROLL ===== */
  const contactSection = document.querySelector("#contact");

  if (contactSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactSection.classList.add("contact-show");
        }
      });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
  }

});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => revealObserver.observe(el));

/* ===== CONTACT CARD 3D TILT ===== */
const contactCard = document.getElementById("contactCard");

if (contactCard) {
  contactCard.addEventListener("mousemove", e => {
    const rect = contactCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    contactCard.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  contactCard.addEventListener("mouseleave", () => {
    contactCard.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}

 /*-- BLOG DETAIL (HIDDEN BY DEFAULT) --*/

 /* Blog cover image */


function openBlog(blogId) {
  // Hide entire website
  document.getElementById("main-content").style.display = "none";

  // Show blog page
  document.getElementById("blog-detail").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
/*blog1*/
  if (blogId === "blog1") {
    document.getElementById("blog-title").innerText =
      "Why 100 Lines of Code Can Be Better Than 2 Lines of Code";

    document.getElementById("blog-meta").innerText =
      "By Jatin Jakhar • 05-06-2025 • 5 min read";

   document.getElementById("blog-content").innerHTML = `
  <!-- COVER IMAGE -->
  <img src="assets/blog1-cover.png" class="blog-cover" alt="Blog cover">

  <p>
    In programming, we often hear that <strong>shorter code is better</strong>.
    But that's not always true. Sometimes, writing more lines of code can actually
    help us write faster and more efficient programs.
  </p>

  <p>Let's understand this with a simple example.</p>

  <hr class="blog-divider">

  <h3>Real-Life Example: Searching in a Dictionary</h3>

  <p>
    Imagine you're looking for the meaning of the word
    <strong>"Garrulous"</strong> in a dictionary.
    You can try two ways:
  </p>

<hr class="blog-divider">
  <h4>1. Search from the first page:</h4>
  <p>
    Start from page one and keep flipping pages until you find the word.
  </p>

  <h4>2. Use a smarter way:</h4>
  <p>
    Open the dictionary somewhere in the middle.
    Check the words on that page.
  </p>

  <ul>
    <li>If the words are after <strong>'G'</strong>, go back.</li>
    <li>If the words are before <strong>'G'</strong>, go forward.</li>
    <li>Repeat until you find the word.</li>
  </ul>

  <hr class="blog-divider">
<h3>Which way is faster?</h3>
  <p>
    Clearly the second method is faster. This is how
    <strong>binary search</strong> works.
  </p>

  <hr class="blog-divider">

  <h3>Coding Example: Searching in an Array</h3>
<hr class="blog-divider">
  <p>Let's take a sorted array of numbers:</p>

  <pre><code>
int arr[10] = {1,2,3,4,5,6,7,8,9,10};
  </code></pre>
<p>We want to find a specific number (called key) in this array.</p>

<hr class="blog-divider">
  <h4>Method 1: Linear Search (Simple but Slow)</h4>

  <pre><code>
for (int i = 0; i < 10; i++) {
  if (arr[i] == key) {
    element = arr[i];
  }
}
  </code></pre>

  <ul>
    <li>Easy to write</li>
    <li>Up to 10 comparisons</li>
  </ul>

  <hr class="blog-divider">
  <h4>Method 2: Binary Search (More Code, Much Faster)</h4>

  <pre><code>
int start = 0;
int end = 9;
int mid;

while (start <= end) {
  mid = (start + end) / 2;

  if (arr[mid] == key) {
    element = arr[mid];
    break;
  } else if (arr[mid] < key) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
  </code></pre>

  <ul>
    <li>More lines of code</li>
    <li>Much fewer comparisons</li>
  </ul>

  <hr class="blog-divider">

  <h3>So, Which One is Better?</h3>

  <p>
    Even though the second method has more lines of code,
    it is faster and more efficient , especially when dealing with large amounts of data.
  </p>

  <blockquote>
    Don't judge code by its length. Judge it by its performance.
  </blockquote>

   <hr class="blog-divider">

  <h3>The key takeaway:</h3>
  <p>
    Sometimes, <strong>100 lines of well-thought-out code</strong>
    are better than 2 lines of slow code.
  </p>
`;
  }
  /*blog2*/
  if (blogId === "blog2") {
  document.getElementById("blog-title").innerText =
    "Learning by Building: Why Projects Teach More Than Tutorials";

  document.getElementById("blog-meta").innerText =
    "By Jatin Jakhar • 02-06-2024 • 6 min read";

  document.getElementById("blog-content").innerHTML = `
    <!-- COVER IMAGE -->
    <img src="assets/blog2-cover.png" class="blog-cover" alt="Learning by Building">

    <p>
     <strong> When starting to learn programming or web development, most beginners
      rely heavily on tutorials. Tutorials are helpful for understanding basics,
      but real learning begins when you start building projectson your own. 
    </p>

    <p>
      Projects push you to think, experiment, and solve real problems —
      something tutorials alone cannot do. 
    </p></strong>

    <hr class="blog-divider">

    <h3>1️. Tutorials Show the Path, Projects Make You Walk</h3>
<br color="white">
    <p><strong>Tutorials guide you step by step:</strong></p>
    <ul>
      <li>You follow instructions</li>
      <li>You copy code</li>
      <li>The result usually works</li>
    </ul>
<br color="white">
    <p><strong>Projects are different:</strong></p>
    <ul>
      <li>You decide what to build</li>
      <li>You plan the features</li>
      <li>You figure out how things work together</li>
    </ul>

    <blockquote>
      Projects turn passive learning into active learning.
    </blockquote>

    <hr class="blog-divider">

    <!-- IMAGE -->
    <img src="assets/b2_problem_solving.png" class="blog-image" alt="Problem Solving">

    <h3>2. Projects Improve Problem-Solving Skills</h3>
<br color="white">
    <p>
      When building a project, problems are guaranteed:
    </p>

    <ul>
      <li>Code doesn’t work</li>
      <li>Layout breaks</li>
      <li>Logic fails</li>
    </ul>
<br color="white">
    <p>
      To fix these, you must think logically, break problems into smaller parts,
      and try multiple solutions. This process builds
      <strong>real problem-solving ability</strong>.
    </p>

    <hr class="blog-divider">

    <h3>3️. Debugging Teaches More Than Tutorials</h3>
<br color="white">
    <p>
      Debugging is where real learning happens. While building projects,
      you learn to:
    </p>

    <ul>
      <li>Read error messages</li>
      <li>Use console logs</li>
      <li>Understand why something failed</li>
    </ul>
<br color="white">
    <p>
      Each bug you fix makes you a better developer.
      Tutorials rarely teach debugging deeply — projects do.
    </p>

    <hr class="blog-divider">

    <!-- IMAGE -->
    <img src="assets/b2_complete_project.png" class="blog-image" alt="Completed Project">

    <h3>4️. Projects Build Confidence</h3>

    <p>
      Completing a project gives you confidence. Even small projects like
      a to-do app or calculator prove that
      you can create real things.
    </p>

    <hr class="blog-divider">

    <h3>5️. Real-World Skills Come From Projects</h3>
<br color="white">
    <ul>
      <li>File structure</li>
      <li>Clean and readable code</li>
      <li>Responsive design</li>
      <li>User experience thinking</li>
    </ul>

    <hr class="blog-divider">

    <h3>6️. Projects Make Your Portfolio Strong</h3>
<br color="white">
    <p>
      Recruiters don’t ask:
      <strong>“How many tutorials did you watch?”</strong>
    </p>

    <p>
      They ask:
      <strong>“What have you built?”</strong>
    </p>

    <p>
      A strong portfolio is built with projects — not certificates.
    </p>

    <hr class="blog-divider">

    <h3>Conclusion</h3>

    <blockquote>
      You don’t learn by watching — you learn by building.
    </blockquote>

    <p>
      Tutorials are a great starting point, but projects are where
      true learning happens. Start building, make mistakes,
      and improve step by step.
    </p>
  `;
}

   }

function closeBlog() {
  // Hide blog
  document.getElementById("blog-detail").classList.add("hidden");

  // Show entire website again
  document.getElementById("main-content").style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================= THEME TOGGLE ================= */

const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});
