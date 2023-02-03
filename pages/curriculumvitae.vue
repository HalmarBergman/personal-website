<template>
  <div class="content">
    <!-- LEFT SIDE -->
    <div class="first-column">
      <div class="image-wrapper">
        <div class="image">
          <img src="~/assets/images/table.jpg" />
        </div>
      </div>
      <div class="skills">
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-vuejs" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-vuetify" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-language-html5" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-language-css3" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-language-javascript" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-language-typescript" />
        <v-icon size="35" class="icon" :color="store.lightOrDark ? '#111111' : '#444444'" icon="mdi-language-python" />
      </div>
      <h3 :class="{ textdark: store.lightOrDark == true }">Education</h3>
      <div class="element">
        <div class="header">
          <h4>Master Information Studies</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Amsterdam University, Utrecht | Sep 2022 - Juni 2023 (expected)</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            A Master's in IS focuses on the impact of IT on society & organizations, covering advanced topics such as design & implementation of IT
            systems, social, economic and organizational implications of computerization, research and analytical skills, and the ability to lead and
            manage IT projects with real-world applications.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>Bachelor Information Sciences</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Utrecht University, Utrecht | Sep 2019 - Juni 2022</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            The field of IS focuses on the human aspect of IT, including the design, implementation, and impact of computer technology in society and
            organizations.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>Atheneum</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">CSG Dingstede, Meppel | Sep 2012 - Jun 2018</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">Track (EM): Economics & Management</h6>
        </div>
      </div>
    </div>
    <!-- RIGHT SIDE -->
    <div class="second-column">
      <h3 :class="{ textdark: store.lightOrDark == true }">Experience</h3>
      <div class="element">
        <div class="header">
          <h4>UI / UX Designer & Front-End Developer</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Figrs | 2022 - heden</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            As a UI/UX Designer at Figrs in Apeldoorn, I work on the design and development of complex software applications for clients. My skills in
            Adobe XD, HTML, CSS, JavaScript, Vue.js, Node.js, ETL and Azure Data Fundamentals allow me to create effective and user-friendly solutions
            for our clients.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>Technical Support Agent</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Lead Healthcare | 2021 - 2022</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            As a technical support agent at Lead Healthcare, I actively contributed to the testenvoortoegang.nl policy which allowed thousands of
            people to go out during the COVID pandemic. I used Jira and worked closely with the development team to ensure smooth implementation of
            the policy.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>IT-Consultant</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Royal Huisman | 2018 - 2019</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            At Royal Huisman, I was responsible for organizing and digitalizing the company's large collection of work tools. I implemented a system
            that tracks usage of the equipment to ensure it was used efficiently and effectively. This was a challenging task but with my skills in
            organization and digitalization, I was able to create a system that greatly improved the management of the tools in the company.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>Team Leader</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Albert Heijn Havelte | 2016 - 2019</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            As a shift leader at Albert Heijn supermarket, I was responsible for leading teams of 20+ people. Through this role, I gained experience
            in leadership, teamwork and proposing new best-practice processes. I was able to successfully manage and coordinate the team to ensure
            smooth operations during my shifts.
          </h6>
        </div>
      </div>
      <div class="element">
        <div class="header">
          <h4>Teaching Assistent</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Utrecht University | 2021 - 2022</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            Throughout my studies, I was active as a teaching assistant. In this role I helped other students get a better grasp of the subjects and
            assisted them with their practical assignments.
          </h6>
        </div>
      </div>
      <h3 :class="{ textdark: store.lightOrDark == true }">Certificates</h3>
      <div class="element last">
        <div class="header">
          <h4>Azure Data Fundamentals</h4>
          <h2 :class="{ greyongrey: store.lightOrDark == true }">Microsoft | 2022</h2>
        </div>
        <div>
          <h6 :class="{ textdark: store.lightOrDark == true }">
            Successfully completed the Microsoft Azure Data Fundamentals course, providing a strong foundation in Azure data services and the ability
            to store, manage, and analyze data in the cloud. Increased understanding of data management and analysis in a cloud environment, which can
            be applied to current or future job roles.
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px 0px;
  width: 100%;
  height: 100%;
  gap: 40px;
  overflow-y: scroll;

  animation: 1s ease-out 0s 1 slideInBottom;
  .first-column {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    gap: 20px;
    margin-bottom: 200px;
    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 100%;
        }
      }
    }
    .skills {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  .second-column {
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    gap: 20px;
    .element {
      &.last {
        padding-bottom: 100px;
      }
    }
  }
  .greyongrey {
    color: #676767;
  }
}

@media (width < 480px) {
}

@media (width > 480px) {
}

@media (width > 760px) {
}

@media (width > 1200px) {
}
</style>
