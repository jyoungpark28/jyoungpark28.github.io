// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A Collection of My Projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Highlighting my published work and collaborative research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nEWS/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-conference-poster-presentation-at-international-conference-on-electronics-information-and-communication-iceic-phuket-thailand-study-of-line-edge-roughness-with-without-interface-traps-in-stacked-nanowire-field-effect-transistor",
          title: '[Conference] Poster Presentation at International Conference on Electronics, Information, and Communication (ICEIC), Phuket,...',
          description: "",
          section: "News",},{id: "news-conference-oral-presentation-at-device-research-conference-drc-ieee-high-density-multilayer-graphene-microelectrode-arrays-for-optogenetic-electrophysiology-in-human-embryonic-kidney-cells",
          title: '[Conference] Oral Presentation at Device Research Conference (DRC), IEEE High-Density Multilayer Graphene Microelectrode...',
          description: "",
          section: "News",},{id: "news-received-spe-ct-section-scholarship-society-of-plastics-engineers",
          title: 'Received SPE CT Section Scholarship, Society of Plastics Engineers',
          description: "",
          section: "News",},{id: "news-received-schriever-education-award-society-of-plastics-engineers",
          title: 'Received Schriever Education Award, Society of Plastics Engineers',
          description: "",
          section: "News",},{id: "news-received-conference-participation-award-university-of-connecticut",
          title: 'Received Conference Participation Award, University of Connecticut',
          description: "",
          section: "News",},{id: "news-passed-ph-d-qualification-exam-proposing-and-defending-an-independent-research-proposal-advanced-to-ph-d-candidacy-topic-fluorescence-based-microneedle-glucose-sensor-for-a-long-term-diabetes-management",
          title: 'Passed Ph.D. Qualification Exam–proposing and defending an independent research proposal, Advanced to Ph.D....',
          description: "",
          section: "News",},{id: "news-conference-oral-presentation-at-society-for-biomaterials-sfb-chicago-illinois-biodegradable-piezoelectric-nanofibers-for-medical-applications",
          title: '[Conference] Oral Presentation at Society for Biomaterials (SFB), Chicago, Illinois Biodegradable Piezoelectric Nanofibers...',
          description: "",
          section: "News",},{id: "news-conference-poster-presentation-at-biomedical-engineering-society-bmes-annual-meeting-san-diego-california-extended-lifetime-biodegradable-pressure-sensor-for-knee-joint-load-monitoring-in-osteoarthritis-treatment",
          title: '[Conference] Poster Presentation at Biomedical Engineering Society (BMES) Annual Meeting, San Diego, California...',
          description: "",
          section: "News",},{id: "news-conference-oral-presentation-at-society-for-biomaterials-sfb-atlanta-georgia-implantable-pressure-sensor-with-biodegradability-and-single-ended-configuration-for-post-surgical-joint-loading-monitoring",
          title: '[Conference] Oral Presentation at Society for Biomaterials (SFB), Atlanta, Georgia Implantable Pressure Sensor...',
          description: "",
          section: "News",},{id: "news-received-student-travel-achievement-recognition-star-award-society-of-biomaterials-by-the-orthopaedic-biomaterials-special-interest-group-in-recognition-of-the-contribution-implantable-pressure-sensor-with-biodegradability-and-single-ended-configuration-for-post-surgical-joint-loading-monitoring",
          title: 'Received Student Travel Achievement Recognition (STAR) Award, Society of Biomaterials by the Orthopaedic...',
          description: "",
          section: "News",},{id: "news-conference-poster-presentation-at-society-for-biomaterials-sfb-atlanta-georgia-advancing-brain-cancer-treatment-with-biodegradable-ultrasound-transducer-and-targeted-gene-therapy",
          title: '[Conference] Poster Presentation at Society for Biomaterials (SFB), Atlanta, Georgia Advancing Brain Cancer...',
          description: "",
          section: "News",},{id: "news-webinar-delivered-an-invited-talk-as-a-star-award-recipient-orthopaedic-biomaterials-sig-of-society-for-biomaterials-sfb-link-implantable-pressure-sensor-with-biodegradability-and-single-ended-configuration-for-post-surgical-joint-loading-monitoring",
          title: '[Webinar] Delivered an invited talk as a STAR Award recipient, Orthopaedic Biomaterials SIG...',
          description: "",
          section: "News",},{id: "news-media-uconn-news-recently-highlighted-our-research-on-wireless-knee-joint-monitoring-using-biodegradable-single-ended-pressure-sensor-in-osteoarthritis-management-link",
          title: '[Media] UConn News recently highlighted our research on “Wireless knee joint monitoring using...',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-femoral-tunnel-3d-model",
          title: 'Femoral Tunnel 3D Model',
          description: "Using Solidworks and Nomad Sculpt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CAD_Bone/";
            },},{id: "projects-icrs-score",
          title: 'ICRS Score',
          description: "Evaluating the severity of articular cartilage injuries",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ICRS/";
            },},{id: "projects-pcb-citcuit-design",
          title: 'PCB Citcuit Design',
          description: "Bluetooth/Amplifier/LDO/Voltage Divider",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prj_PCB/";
            },},{id: "projects-real-time-knee-pressure-signal",
          title: 'Real-time Knee Pressure Signal',
          description: "Real-time Monitoring Using Matlab",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prj_Signal/";
            },},{id: "projects-ad5-3d-model",
          title: 'Ad5 3D Model',
          description: "Using Blender and Nomad Sculpt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prj_ad5/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},];
