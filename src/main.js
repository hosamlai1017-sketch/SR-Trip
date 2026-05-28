const navItems = [
  ["Dear San Ramon", "#home"],
  ["Moments", "#moments"],
  ["Learning", "#learning"],
  ["People", "#people"],
  ["Classroom", "#classroom"],
  ["Carry Forward", "#forward"],
];

const assetVersion = "20260527-takeaway-visible";

const funActivities = [
  {
    title: "Napa Valley One-day Trip",
    tag: "Wine Country Day",
    image: "images/napa.jpg", // Replace this image with your Napa Valley photo.
    caption:
      "We spent a beautiful day in Napa Valley together, tasting different wines from the region and sharing many meaningful conversations. It was a great chance to get to know each other beyond the classroom. I really enjoyed the wine, the conversations, and the memories we created there.",
  },
  {
    title: "San Francisco Trip",
    tag: "Hong Kong Team",
    image: "images/san-francisco.jpg", // Replace this image with your San Francisco photo.
    caption:
      "Exploring San Francisco together gave us space to connect, laugh, and enjoy the city as a team. We took many photos, shared fun moments, and created memories that made the trip even more meaningful.",
  },
  {
    title: "Late night gathering at Room 220",
    tag: "Late-night party",
    image: "images/team.jpg", // Replace this image with a late-night party photo.
    caption:
      "On some nights, we gathered in Harry's room and simply spent time together as a cohort. It was one of those simple but happy moments that became unforgettable because of the people in the room. Through these late-night gatherings, the bond within the APAC cohort became even stronger.",
  },
  {
    title: "Hiking",
    tag: "Fresh air",
    image: "images/hiking.jpg", // Replace this image with your hiking photo.
    caption:
      "I helped organize the hiking event for the Academy. It took place shortly after we landed in the States, and even though many of us were still dealing with jet lag, it became a refreshing way to wake up, connect with others, and get ready for the San Ramon experience.",
  },
  {
    title: "Karaoke Bar",
    tag: "Shared joy",
    image: "images/karaoke.jpg", // Replace this image with your karaoke photo.
    video: "videos/karaoke-bar.mp4", // Replace this video with your Karaoke Bar video.
    caption:
      "I joined the Karaoke Bar night with Academy cohorts from around the world. It was such a fun evening filled with music, laughter, and good energy. I even planned to sing a song on stage with Ryo from my APAC cohort, but the waiting time was too long - what a shame!",
  },
  {
    title: "San Ramon Last Day Pool Party",
    tag: "Celebration",
    image: "images/pool-party.jpg", // Replace this image with your pool party photo.
    caption:
      "On the last day of the San Ramon trip, I joined the Farewell Pool Party. It was a fun and relaxing moment where I met many great people and celebrated the end of our time together in San Ramon. It was a cheerful pause in the program where everyone could relax, celebrate, and simply enjoy the moment.",
  },
];

const professionalHighlights = [
  {
    title: "SNP Session",
    tag: "Professional highlight",
    image: "images/snp-session.jpg", // Replace this image with your SNP session photo.
    video: "snp-session.mp4", // Replace this video with your SNP Session video.
    caption:
      "During the SNP Presentation session, we learned how to use the SNP presentation framework, including the \"SNP Triangle,\" to structure clearer and more engaging presentations. We also practiced ways to make presentations more interactive, such as asking \"What questions do you have?\" and maintaining eye contact to each audience. After each presentation, we reviewed our performance and reflected on what we could improve. I was really amazed by the progress I made throughout the session, and I gained valuable lessons on how to deliver a stronger presentation.",
  },
  {
    title: "Academy Demo Framework",
    tag: "Demo craft",
    image: "images/academy-demo-framework.jpg", // Replace this image with your demo framework photo.
    caption: [
      "I learned that a strong presentation is not just about delivering information, but about guiding the audience through a clear story. The framework taught me how to start with a strong opening, connect the presentation to the customer's challenges, use the demo to prove value, and close with a memorable message. It also reminded me to keep the audience engaged through questions, interaction, and clear storytelling.",
      "In one of the lecture, Daniel Arroyo (a fellow from Columbia who is a SuccessFactors Solution Advisor)'s demo also showed me what a strong Academy-standard demo looks like and gave me a clearer direction for improvement.",
    ].join("\n\n"),
  },
  {
    title: "Objection Handling",
    tag: "Customer confidence",
    image: "images/objection-handling.jpg", // Replace this image with your objection handling photo.
    caption: [
      "During the Objection Handling session, we learned different ways to respond to objections, such as reframing the question before answering. We also had the opportunity to practice handling real-life objections.",
      "From my final evaluation in San Ramon, I realized that I need to answer with more confidence, even when I am not 100% sure of the response. If I sound uncertain, the customer may also lose confidence. Moving forward, I will apply what I learned from the session and continue practicing this skill in the field.",
    ].join("\n\n"),
  },
  {
    title: "CVJ Selection Evaluation",
    tag: "VAT team",
    image: "images/cvj-selection-evaluation.jpg", // Replace this image with your VAT team photo.
    caption:
      "During the evaluation, my VAT team and I worked on a real-life business case to show how SuccessFactors could address the client's challenges. We applied what we learned in San Ramon, including presentation skills, customer interaction, AI strategy, and client engagement. It was valuable not only because we could test our knowledge, but also because we learned how to work with teammates from different cultures and backgrounds. This experience taught me to stay open-minded, respect different working styles, and adapt as a team to deliver the best result.",
  },
];

const learningThemes = [
  {
    title: "Demo Skills and Objection Handling",
    points: [
      "Learned how to structure a stronger demo and handle objections more effectively during customer conversations.",
      "Through my live demo evaluation, I received valuable feedback on how to respond to questions, stay calm, and guide the conversation with confidence.",
    ],
  },
  {
    title: "Presentation Skills",
    points: [
      "Learned the SNP Presentation Framework, including how to use the \"SNP Triangle\" to structure a clearer and more engaging presentation.",
      "Improved practical skills such as eye contact, audience connection, and speaking with confidence.",
      "Repeated practice pushed me out of my comfort zone and made me feel less nervous about presenting.",
    ],
  },
  {
    title: "SAP Strategy",
    points: [
      "Gained a better understanding of SAP's latest strategy and how AI may shape the future of SAP applications.",
      "One key takeaway was how AI can make enterprise systems more conversational and easier for users to interact with.",
      "This helped me better understand SAP's direction and my future role as a Solution Advisor.",
    ],
  },
  {
    title: "Leadership Skills",
    points: [
      "Met many Academy associates who showed different forms of leadership.",
      "Learned that leadership is not only about being visible or vocal, but also about taking initiative, supporting others, and doing what is right.",
      "These encounters gave me examples of the kind of leader I want to become.",
    ],
  },
  {
    title: "Guiding with Empathy",
    points: [
      "If I had to summarize my San Ramon experience in one lesson, it would be empathy.",
      "Whether it is presentation, demo delivery, objection handling, leadership, or SAP strategy, everything starts with understanding people.",
      "San Ramon reminded me to listen carefully, think from others' perspectives, and guide others with clarity and care.",
    ],
  },
];

const people = [
  {
    name: "Jean Ooi",
    image: "images/jean-ooi.jpg", // Replace this image with Jean Ooi's photo.
    takeaway:
      "Speaking up is responsibility - to myself, my ideas, and the people I may support.",
    reflection: [
      "Jean Ooi is my RAD, and San Ramon was the first time I met her in person. Throughout the classroom experience, she was incredibly supportive to all of us.",
      "During my 1:1 session with her, I originally only wanted to collect feedback. However, the conversation became much more meaningful than I expected. I opened up about my insecurity around standing up for myself, sharing my ideas, and showing leadership in a group setting.",
      'Jean asked me, "Would you stand up for other people?" I said yes. Then she said something that really stayed with me: "I doubt you will stand up for someone else when you are afraid of standing up for yourself."',
      "That sentence gave me a new perspective. Speaking up is not only about confidence; it is also about responsibility - to myself, to my ideas, and to the people I may want to support in the future.",
      "This is something I will carry forward, not only at work but also in life. Thank you, Jean, for being more than a RAD - for being a coach who helped me become a better person.",
    ].join("\n\n"),
  },
  {
    name: "Ryo Hirose",
    image: "images/ryo-hirose.jpg", // Replace this image with Ryo Hirose's photo.
    takeaway:
      "Believe in the words I tell myself - they can shape what I think is possible.",
    reflection: [
      "Ryo is from Kyoto and is one of the most inspiring associates I met in the Academy. In our Academy Yearbook, he jokingly said he wanted to become the \"APAC President.\" At first, I thought it was just a funny comment, but after meeting him in person, I can genuinely see why.",
      "Over the two weeks, I saw someone who gave his best in every deliverable, supported the people around him, and still brought a lot of fun and energy to the group. What inspired me most was how natural it all felt. He was not trying to get attention. He simply did what he believed was right.",
      "Ryo showed me that leadership is not only about being confident or visible. It is about having strong values, supporting others, and choosing to do the right thing even when no one is watching.",
      "One moment that stayed with me happened on the last day of the evaluation. We were walking to the San Ramon campus and talking about our final assessment. I asked him whether he was ready, and he jokingly said that he and his teammate were going to get a 5. I told him that getting a full score in the Academy was impossible.",
      "Then he said something that really stayed with me: \"Sam, words have spirit. You need to tell yourself you can do it, and those words will carry you and make it happen.\"",
      "That reminded me how often I use my own words to lower expectations or protect myself from disappointment. Ryo helped me realize that the words we choose can shape how we see ourselves and what we believe is possible.",
      "Beyond inspiring me to become a better leader, Ryo reminded me to be more mindful of how I speak to myself. From now on, I want my words to carry me forward, not hold me back.",
    ].join("\n\n"),
  },
  {
    name: "Allen Malayo",
    image: "images/allen-malayo.jpg", // Replace this image with Allen Malayo's photo.
    takeaway:
      "Quiet leadership means noticing what others need and helping the team succeed.",
    reflection: [
      "Allen is an Account Executive from the Philippine team. From the first time I met him, he came across as gentle, polite, and very thoughtful.",
      "I had the chance to work with him during the CSR event in San Ramon, where we helped the HandsOn Bay Area team host an activity for the Academy. Associates decorated canvas tote bags with fruit and vegetable designs, which would later be donated to people in need.",
      "What impressed me most was how naturally Allen stepped up. At first, I thought my role was simply to listen to the instructions and complete the task. But Allen was already thinking one step ahead. He created a Canva page and displayed it on the screen so everyone could understand the purpose of the event and follow the process more easily.",
      "He also checked whether people needed help, noticed when materials were running low, and asked for more before it became a bigger issue. He was not standing at the front as the MC, so some people may not have noticed how much he was doing. But to me, he was the engine behind the scenes, quietly making sure everything worked.",
      "Later, when we went to Napa Valley, I told him how much I admired his leadership. He smiled and said that, as an Account Executive, he is always thinking about how to make his team's work easier and give them the resources they need.",
      "That conversation stayed with me. Allen showed me that leadership is not always about being the most visible person in the room. Sometimes, it means seeing what others need before they ask, creating structure, and quietly helping everyone succeed.",
    ].join("\n\n"),
  },
  {
    name: "Phoebe Ngitngit",
    image: "images/phoebe-ngitngit.jpg", // Replace this image with Phoebe Ngitngit's photo.
    takeaway:
      "Kindness can be quiet, but it can still make people feel safe and included.",
    reflection: [
      "Phoebe is a Solution Advisor for SCM from the Philippine team. I first met her in a breakout room during one of our classroom sessions, and we also spent a lot of time together in San Ramon.",
      "What inspired me about Phoebe was not one single moment, but the way she consistently made people feel. She was always kind, warm, and thoughtful. Her presence made people comfortable, and I think that is why others naturally enjoyed being around her.",
      "There is an old Chinese saying: \"心善则美，心和则贵.\" A kind heart makes a person beautiful, and a peaceful heart makes a person graceful. To me, this describes Phoebe perfectly. Her kindness and gentle energy made her presence calm, warm, and memorable.",
      "Phoebe reminded me that true kindness does not need to be loud. People can feel it through the way you speak, listen, and include others. It changes the atmosphere around you and makes people feel safe. This is the kind of presence I hope to carry with me, both in the workplace and in life.",
    ].join("\n\n"),
  },
  {
    name: "Jeevan Joseph Mattapparampil",
    image: "images/jeevan-joseph.jpg", // Replace this image with Jeevan Joseph Mattapparampil's photo.
    takeaway:
      "Confidence starts with small moments of courage and participation.",
    reflection: [
      "Jeevan is a Solution Advisor from India. Unexpectedly, he was also one of the most fun people to spend time with. We shared many moments in San Ramon and even met again in Los Angeles. Beyond being fun and easy to be around, he was also active, supportive, and highly engaged throughout the classroom experience.",
      "He participated in class, raised his hand, supported others, and helped organize internal events. I have always been a little afraid of initiating or being in the middle of attention, but Jeevan showed me what it looks like to step forward with confidence.",
      "One moment that stayed with me happened during an executive keynote by Oren Yadad, Global Head of SAP Research & Innovation. During the Q&A session, I hesitated to raise my hand because the room was filled with faculty and associates. But Jeevan was the first to do it.",
      "He asked a thoughtful question about how SAP can take responsibility if AI makes a mistake. It was bold, meaningful, and natural. Seeing him ask that question made me realize that speaking up is not about seeking attention. It is about contributing to the conversation.",
      "Jeevan reminded me that courage can be practiced in small moments. Sometimes, the first step to confidence is simply deciding to participate.",
    ].join("\n\n"),
  },
  {
    name: "Joey Chen",
    image: "images/joey-chen.jpg", // Replace this image with Joey Chen's photo.
    takeaway:
      "Trying something difficult can open the door for my own growth and inspire others too.",
    reflection: [
      "Joey had already built strong experience with SuccessFactors through her previous SAP internship. During the Academy evaluation, she chose to do a live demo for her part. I was impressed because I had mostly relied on screenshots and videos for my own preparation. What stood out even more was that no one asked her to do it - she took the initiative herself.",
      "Her example encouraged me to try my first live demo during the evaluation, even though I had never done one before. The night before, she offered to teach me and gave me helpful feedback. Her support made me less afraid of failing and more willing to try something difficult.",
      "Through that experience, I received valuable feedback and gained a clearer understanding of what a strong demo should look like. Joey reminded me that growth often begins when we step outside our comfort zone.",
      "What made the experience even more meaningful was that the impact did not stop with me. After I told other SuccessFactors Solution Advisors in my APAC cohort that I would try a live demo, some of them decided to try their first live demo as well.",
      "During field experience, I want to actively look for more opportunities to practice live demos and continue improving as a SuccessFactors Solution Advisor. Joey showed me that when we choose to step up, we may also give others the courage to do the same.",
    ].join("\n\n"),
  },
  {
    name: "Hong Kong Team",
    image: "images/hong-kong-team.jpg", // Replace this image with your Hong Kong Team photo.
    takeaway:
      "A supportive team can make learning, stretching, and growing feel less lonely.",
    reflection:
      "This group reminded me how much community matters when you are learning, stretching, and growing together.",
  },
];

const classroomItems = [
  {
    title: "SNP Session",
    text: "A space to practice facilitation, presence, and the way a message lands with an audience.",
  },
  {
    title: "Presentation Framework",
    text: "A practical way to create clearer flow, stronger openings, and more purposeful conversations.",
  },
  {
    title: "Academy Demo Framework",
    text: "A guide for turning product knowledge into a customer-centered story with business relevance.",
  },
  {
    title: "Objection Handling",
    text: "A reminder that listening, reframing, and empathy are essential parts of advisory work.",
  },
];

function app() {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Dear San Ramon home">
        <span>Dear San Ramon</span>
      </a>
      <nav class="top-nav" aria-label="Main navigation">
        ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    </header>

    <main>
      <section class="hero section-pad" id="home">
        <div class="hero-copy">
          <p class="eyebrow">SAP Academy Program reflection journal</p>
          <h1>Dear San Ramon: A Journey of Learning, People, and Growth</h1>
          <p class="intro">
            San Ramon was more than a training trip. It was a journey of
            learning, connection, self-discovery, and growth. Through classroom
            sessions, team activities, conversations, and shared moments with
            people from different regions, I gained new perspectives on what it
            means to become a Solution Advisor.
          </p>
          <p>
            I feel truly grateful to be part of this program and to have the
            opportunity to learn alongside such inspiring people.
          </p>
          <div class="hero-actions" aria-label="Journal summary">
            <a class="button" href="#moments"><span aria-hidden="true">PH</span> Open the memories</a>
            <a class="button secondary" href="#learning"><span aria-hidden="true">MAP</span> Follow the journey</a>
          </div>
        </div>
        <div class="hero-visual">
          <img src="${assetUrl("images/san-ramon-hero.jpg")}" alt="San Ramon trip memory placeholder" />
          <!-- Replace images/san-ramon-hero.jpg with your main San Ramon trip photo. -->
          <div class="journal-note">
            <span>Location</span>
            <strong>San Ramon, California</strong>
            <small>Learning, people, gratitude, and growth</small>
          </div>
        </div>
      </section>

      ${section({
        id: "moments",
        tone: "peach",
        icon: "MEM",
        eyebrow: "Photo memories",
        title: "Moments I Want to Remember",
        body: `
          <p class="section-lede">
            These were the moments that made the trip feel full: the places we
            explored, the rooms where we laughed, and the professional
            milestones that helped me grow.
          </p>
          ${subheading("Fun Activities")}
          <div class="photo-grid">${funActivities.map(photoCard).join("")}</div>
          <div class="merged-classroom-block" id="classroom">
            ${subheading("Academy Professional Highlights & Classroom Experience")}
            <p class="section-lede">
              The classroom experience helped me turn knowledge into practice.
              Through the SNP session, presentation framework, demo framework,
              and objection handling training, I learned how to communicate
              with more structure, confidence, and purpose.
            </p>
            <div class="photo-grid professional-grid">${professionalHighlights.map(photoCard).join("")}</div>
          </div>
        `,
      })}

      ${section({
        id: "learning",
        tone: "blue",
        icon: "MAP",
        eyebrow: "Growth journey map",
        title: "What I Learned Along the Way",
        body: `
          <p class="section-lede">
            The learning unfolded like a path: each session, practice moment,
            and conversation added another layer to how I understand Solution
            Advisory.
          </p>
          <div class="journey">${learningThemes.map(learningCard).join("")}</div>
        `,
      })}

      ${section({
        id: "people",
        tone: "green",
        icon: "YOU",
        eyebrow: "Gratitude notes",
        title: "People Who Inspired Me",
        body: `
          <p class="section-lede">
            People shaped the meaning of this trip. While I cannot include
            everyone here, every conversation, encouragement, and small
            interaction gave me something to learn from. These are a few
            moments that stayed with me most.
          </p>
          <div class="people-grid">${people.map(personCard).join("")}</div>
        `,
      })}

      <section class="closing section-pad" id="forward">
        <div class="closing-shell carry-forward-section">
          <p class="eyebrow">Thought of the trip</p>
          <h2>Thoughts I'm Carrying Forward</h2>

          <div class="carry-forward-note">
            <span class="note-label">NOTE</span>
            <div class="note-content">
              <p>What I will carry forward from San Ramon is more than what I learned from the sessions. It is the mindset to keep learning, stay curious, step up when it matters, and do what feels right with courage and empathy.</p>
              <p>This trip reminded me that growth often comes from the people around us - from the conversations that challenge us, the feedback that makes us think, and the moments that encourage us to become better. I feel truly grateful for the chance to be here, learn alongside others, and be inspired by people who showed me what leadership, support, and authenticity can look like.</p>
              <p>As I move into field experience, I want to carry this forward by speaking up for what I believe in, listening with empathy, and putting my full effort into turning these lessons into action.</p>
            </div>
          </div>

          <div class="next-focus-block">
            <p class="focus-heading">Carrying this into the next 10 weeks</p>
            <div class="focus-journey" aria-label="San Ramon to field experience journey">
              <span class="focus-step">San Ramon</span>
              <span class="focus-arrow">-&gt;</span>
              <span class="focus-step">Gratitude</span>
              <span class="focus-arrow">-&gt;</span>
              <span class="focus-step">Growth</span>
              <span class="focus-arrow">-&gt;</span>
              <span class="focus-step">Field Experience</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function section({ id, tone, icon, eyebrow, title, body }) {
  return `
    <section class="journal-section section-pad ${tone}" id="${id}">
      <div class="section-heading">
        <div class="section-icon">${icon}</div>
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
        </div>
      </div>
      ${body}
    </section>
  `;
}

function subheading(label) {
  return `<div class="subheading"><span>${label}</span></div>`;
}

function photoCard(card) {
  return `
    <article class="photo-card">
      <div class="photo-frame">
        ${
          card.video
            ? videoBlock(card.video, `${card.title} video`)
            : `<img src="${assetUrl(card.image)}" alt="${card.title} placeholder" />`
        }
      </div>
      <div class="card-copy">
        <span>${card.tag}</span>
        <h3>${card.title}</h3>
        <p>${card.caption}</p>
        <!-- Edit this caption later with your own diary-style reflection. -->
      </div>
    </article>
  `;
}

function videoBlock(src, label) {
  return `
    <video class="card-video" controls preload="metadata">
      <source src="${assetUrl(src)}" type="video/mp4" />
      Your browser does not support this video.
    </video>
    <!-- Replace ${src} with your own MP4 video if needed. -->
  `;
}

function learningCard(item, index) {
  const body = item.points
    ? `<ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
    : `<p>${item.text}</p>`;

  return `
    <article class="learning-card">
      <div class="journey-marker">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <h3>${item.title}</h3>
        ${body}
        <!-- Edit this text later with your personal learning takeaway. -->
      </div>
    </article>
  `;
}

function personCard(person) {
  const paragraphs = person.reflection.split("\n\n");

  return `
    <article class="person-card editorial-wrap-card">
      <div class="person-copy">
        <div class="person-left">
          <div class="floating-photo">
            <img src="${assetUrl(person.image)}" alt="${person.name} placeholder" />
          </div>
          <div class="person-takeaway">
            <p class="person-takeaway-label">What this person showed me</p>
            <p>${person.takeaway}</p>
          </div>
        </div>
        <h3>${person.name}</h3>
        <span>What this encounter taught me</span>
        ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <!-- Edit this reflection later with your own memory of this person or group. -->
    </article>
  `;
}

function notebookCard(item) {
  return `
    <article class="notebook-card">
      <div class="notebook-icon" aria-hidden="true">JR</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function quoteBlock(text) {
  return `
    <blockquote class="quote-block">
      <span aria-hidden="true">NOTE</span>
      <p>${text}</p>
      <span class="quote-heart" aria-hidden="true">Forward</span>
    </blockquote>
  `;
}

function assetUrl(path) {
  return `${path}?v=${assetVersion}`;
}

document.getElementById("root").innerHTML = app();

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("missing-image");
    image.removeAttribute("src");
  });
});
