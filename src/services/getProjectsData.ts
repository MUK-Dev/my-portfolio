export default function getProjectsData<T>(): T {
  return [
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/HOME OWNER.png',
    //   title: 'HOME OWNER',
    //   description:
    //     'My first published mobile game. This is a casual mobile game good for passing time. You defend your home from endless waves of animals.',
    //   learned:
    //     'I learned Unity animator for 2D, basic logic for gameplay loop, UI, implementing Ads, delivering a finished product.',
    //   skills: ['Unity', 'Adobe Photoshop', 'Unity Ads'],
    //   blurHash:
    //     '|5FIm$xr8VK|.Jvi7Gv*.{z^Q[TrpVw1l2Ibr1#m5-ob$PS5TXWY*.nkF@TZt3a$VywcWEW-O,bt%bOXNdz@*+pC7[K^,WxoTpeFVeTZzbtOX#R,HMV_zvocI@o{+OnmPNu0wMVuNuXOOUwJs.W;:=wdFsOprvR*b;rwsW',
    //   link: 'https://play.google.com/store/apps/details?id=com.MysticCraftz.HomeOwnerClickerDefence&hl=en_US',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Kitchen Chaos.png',
    //   title: 'Kitchen Chaos',
    //   description:
    //     'This was my first game made with Unity. It is a cooking game where you prepare and deliver recipies. Made by following the Unity Course from Code Monkey on Youtube.',
    //   learned:
    //     'I learned Unity layout, C#, OOP concepts, UI, raycasts, animator, Singletons, State Machines, and C# events',
    //   skills: ['Unity'],
    //   blurHash:
    //     '|GEVQkRj4nX9%1W-R$ozXTkAWBjZWXozjYW.oJWX0KWYX7ocxuRkWYaKi^%2kCoboesSR.V[WYs+yse.VXbIofofxCX8bIIUoItRRlbIocobj@R.WBt6ofWBflWBWUayf6IokCs:j?WBa~a~azoIvzWEbwoeWBj]R.oKj?',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Survival Game.png',
    //   title: 'Survival Game',
    //   description:
    //     'I made this game as the capstone project for my Unity Game Development bootcamp at Game Train. I made many system all by myself with as little help as I could from youtube videos by lots of trial and error.',
    //   learned:
    //     'I learned different types of raycasts(box, capsule, circle etc), Unity New Input System,NavMesh, AI, Character rigs, Animator for 3D characters, Animation Layers, Inventory System, Detecting objects near player, Drag and drop UI, AI state machines, Using pre made assets',
    //   skills: ['Unity', 'Blender'],
    //   blurHash:
    //     '|684iB$%00-V-UIpI:odoe4U=}~CIUELoyt7NbR*vyn4xI$*t7R+IpWqt7-6rWRj%NnPRjtRbFRPrX-Av}IUpJtQM{WCt7$$v~w{wHM_T0tRWBRj$OxGnisDwcNFOXkWogw|w|xabHWCnhjFS#SfxGxGsBs:X8S#aenif+',
    //   link: 'https://play.unity.com/mg/other/survival-game-build-webgl',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Impulse Clone.png',
    //   title: 'Impulse Clone',
    //   description:
    //     'I saw this cool game named Impulse on Github and I tried to replicate its game mechanics',
    //   learned:
    //     'I learned to use Navmeshes for AI movements and applying different types of forces.',
    //   skills: ['Unity'],
    //   blurHash:
    //     '|JNJBrjZ}loyv}ofIVn$o}s.kCbIj[azf6fQf6fQ[TofEkafo}afShfkWCsnf7j[kCfkj[fkayay;1f6JBkBN_bHxufQWCt6kCj[ayayayf6j[j[Mdfk%LjtNHayofayoeoLayjskBj[fkayf6f6%KjZIVayxtj@WCj[WC',
    //   link: 'https://play.unity.com/mg/other/quiz-2-build',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Donkey Kong clone.png',
    //   title: 'Donkey Kong Clone',
    //   description:
    //     'I tried to replicate game mechanics of original donkey kong game. Player can climb ladders, jumb and dodge obstacles',
    //   learned:
    //     'I learned to detect objects passing under the player by raycasts.',
    //   skills: ['Unity'],
    //   blurHash:
    //     '|3BgPAxt01Nc4W$*IWxZRk8#x[xttQtQs:XRM|t6X8t7%Kn+WXofWBNHIW4W%Lxt%LxaIqxtWVoytj~otQV[%1M|M}Ipso8zMzt7Dkt6bHa#-.t6a102%etjSgxtn%-nIp01of%Kofo|s:%KaMkVD*D+?ZxtxaoyRQt6M|',
    //   link: 'https://play.unity.com/mg/other/instructor-task-5-1-5-2-build',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Bomb Squad Clone.png',
    //   title: 'Bomb Squad Clone',
    //   description:
    //     'A game where you blow up your opponents. All the assets used are from Unity Asset Store',
    //   learned:
    //     'I learned to how to add different types of power ups, animation triggers.',
    //   skills: ['Unity'],
    //   blurHash:
    //     '|uMj~ojsC,kBPBj[T0bIXSxGjtWWj@fQayazjtfkG]bHS~fkrXbHrqjtrrkCj[ayayfjj[jsa|fQPAfjrrazrqjsj@f6X8kCf7bHjtoKfQf6fPa}T0fQrrfknijsS~a}X8bIfQj[fQa|f7f6fQa|XSa|rrjsbHayX9j[jZ',
    //   link: 'https://play.unity.com/mg/other/instructor-task-4-3-4-4-build',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Knife Throwing Hit Clone.png',
    //   title: 'Knife Throwing',
    //   description:
    //     'A clone of knife throwing hit game. I made all the assets myself using Blender and Adobe Illustrator.',
    //   learned:
    //     'I learned to make different levels with gameplay variations, adding cuts to model in blender, texturing based on UV maps in Adobe Illustrator',
    //   skills: ['Unity', 'Blender', 'Adobe Illustrator'],
    //   blurHash:
    //     '|HR^?ko||3j?5*s:,[jZOTyBayWXoen~WCWXoLoJ^QaK6xoL=fWVJ6ofr^t6oen$RjS#sosSS2R,NZkCw4WVNZofs;WVaxtQbbk9oLagWpkAjGbHWCbHoKoLW;WCjGoebaoIaekDjajraeWEofs,sEj[S0aen,kBbXjtah',
    //   link: 'https://play.unity.com/mg/other/musmankhilji_knifethrowinghit-build',
    // },
    // {
    //   type: 'GAME',
    //   img: '/assets/projects/Feed Animals.png',
    //   title: 'Feed Animals',
    //   description:
    //     'A game where you can feed the animals to send them home. With choices for different types of food.',
    //   learned:
    //     'I learned to select different types of food to shoot, add UI animations.',
    //   skills: ['Unity'],
    //   blurHash:
    //     '|1Bz]u,q%S?a?K.6~mvz$S%lic#1%0aYwInCD~xsI2%KtF=yL,=#t0tjtk-e$N#c%LgCs+w6$%$%}_v$fck7-=jWxnrqn4kh%K-X#m$x-oxaWBkVITxsxZaJwJr=NEx[tP%Kw_sjRhtRM_sk-pROsi%1s?oL%dt6jrxaaL',
    //   link: 'https://play.unity.com/mg/other/unit2-build',
    // },
    {
      type: 'WEB',
      img: '/assets/projects/here-project.png',
      title: 'Here Project',
      description:
        'Didnt want to pay for MIRO subscription so I made my own. It is not a full-fledged miro but it has some features like',
      learned:
        'I learned to work with Convex, Clerk, and Live blocks to create this real-time prototying application. Using SVG to draw shapes and other features.',
      skills: [
        'Next JS',
        'Typescript',
        'Tailwind CSS',
        'Shadcn UI',
        'Convex',
        'Clerk',
        'Liveblocks',
      ],
      blurHash:
        '|MP?p]Tg.8}kyY9GDiR.%L*0-68_E,VX%L?bIUR,8_bakCs:bbV@axWBofD$R.%MngkDRkMyt8oJkWRPj?NHM{t8V[tQRjtQRPs;NKRjs:NGxaRjD%Rjt7j@j[ayRjozWBIBW?kBskozWVjFf8ayE2n$Rjbvn$smozV[ag',
    },
    {
      type: 'WEB',
      img: '/assets/projects/NFC Student Portal.png',
      title: 'NFC IET Student Portal',
      description:
        'Worked as a Project Lead building the Student Portal for my University This was my final year project. Our team of 6 developers collaborated to create a full scale student portal for managing attendance, results and much more.',
      learned:
        'We implemented complete custom made dashboard, role based authentication(Student, Teacher, Parent, Admin), attendance system, result system, reports generation system.',
      skills: [
        'React',
        'react-query',
        'MUI',
        'Framer Motion',
        'Node JS',
        'Express',
        'MongoDB',
        'JWT',
      ],
      blurHash:
        '|TQvwPE0?vj[M_xvt7Rjt7~qxuD%ayt7M{afs:WBM{RQxut7f8s;j@fjWBxat7ofRjRjfiWBWBoLWBRjM{WBt7ofofofj[xus;t7t7f8WBj[jbWBaejuayR%R%fPofWBj@j?WBWUbFogofRjWBofj[WCkCofafWBayt7j[',
      link: 'https://nfc-attendance-frontend.vercel.app',
    },
    {
      type: 'WEB',
      img: '/assets/projects/react mui event calendar.png',
      title: 'react-mui-event-calendar',
      description:
        'Made a custom package for my final year project at NFC IET University',
      learned:
        'I learned to make complex component libraries for React using Rollup, responsive calendar, handling dependencies, event system',
      skills: ['React', 'MUI', 'Moment JS', 'Rollup', 'NPM'],
      blurHash:
        '|3S?ANxT_3%h_N?cD%?HD$D4s*t7f*%MM{of%MM{QSxYIUM_xvofofogWA=e-;MzDiW9Rioz%MkD8wt6s;Rhoxs.s:t7WCq]jXt8oxaiWAt6t8f*h#sjWVkWWEWBjvjYt7]ns%R*bcRlWEbIWAt7h|nMt8tRM}ofoJMxt5',
      link: 'https://www.npmjs.com/package/react-mui-event-calendar',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Lamar.png',
      title: 'LAMAR',
      description:
        'Worked on bug fixes and adding new pages and features to this travel, trip planning, delivery and weather stats from trackers application.',
      learned:
        'I learned to use Google Maps advance features, calculating routes, custom markers, selecting locations in various ways, managing performance of website while showing maps, showing real-time data from trackers through web sockets.',
      skills: [
        'Next JS',
        'Typescript',
        'SASS',
        'MUI',
        'Google Maps',
        'Stomp JS',
        'Sock JS',
        'Framer Motion',
        'Redux',
      ],
      blurHash:
        '|86t{|js00j[?vf5ITj[og%1j[Rkjss-fkWCf6oL4mj[_4f69Ej]%MaxWAN1fPxpfRM~j?t5ayRk-;f6D%j@%MayM{j[oLxrfRM}jsxsa#RkoLofNLj[xVayRnjss-j[a#M{j[xtayRjjst6fkaynzfRWZjss*azWFj@oJ',
    },
    {
      type: 'WEB',
      img: '/assets/projects/GreenwaveIOT.png',
      title: 'Green wave IOT',
      description:
        'Worked on building the landing pages from design, created custom animations for products, made design responsive and also improved on the design of the dashboard.',
      learned:
        'I learned to manipulate different properties of SVGs to make custom animations, reponsive design with Chakra UI, implemented 3D particle globe with Three JS.',
      skills: [
        'React',
        'Typescript',
        'SASS',
        'Chakra UI',
        'Framer Motion',
        'Redux',
        'Three JS',
      ],
      blurHash:
        '|55~IQxb8~afyAafV[WBM|VgnntQoybXafk9aeWB03t6??ofMzoeW-aytPkjkQRRRRoyoeaybGof%uIUD+oet6aztPofRSRjMyo]x?WBV]oeoMjuR.t7tORQS1jbRRjutPt8x[V]ICbXt6ofbFbYt7oMWCoeoxkBoxayV[',
    },
    {
      type: 'WEB',
      img: '/assets/projects/we-pdf.png',
      title: 'WE PDF',
      description:
        'Made a custom landing pages and improvements to the pdf editing tool on this website',
      learned:
        'I learned to use Chakra UI better and how to make adjustments to previously made pdf editing tool (pspdfkit)',
      skills: ['Next JS', 'Typescript', 'Chakra UI', 'PS PDF KIT'],
      blurHash:
        '|5S?AN=w~WEh%$?cIuxYRg-pkWIpVr%2tQScfAjLbcV@jEtRR*V@ohkCbr~qShM{xZIAMx%LtRX9-:t7M|RPM{WBozt7o#r=xCs.IptltSR.oen#VrRPjZtRbwo}ozWBe.-;IVRj-pofWBt7WBWCShNHaexas.i_WBWVkW',
      link: 'https://www.we-pdf.com/en',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Infinite Stock Photos.jpeg',
      title: 'Infinite Stock Photos',
      description:
        'InfiniteStockPhotos.com was an AI image generation website using Stable Diffusion. Made for a client on Upwork. My role was to rebuild the frontend in React',
      learned: '',
      skills: ['React', 'MUI', 'Firebase'],
      blurHash:
        '|sLDldR%xuV@x]RkxuWBs;~DoyR*ofRjofV@ofax=|oyWBkCWBofaxj[WUvzkBj@f7f5fkbHaeafMdfhkBjZkBf6j@jtj[H?bYbbayf+WVj[fkj[MdbFkCf6offQj[jZj[iwkBayj[jsj@j[aybHsmbajsj[WCj[aeayay',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Faststartup.png',
      title: 'Fast Startup',
      description:
        'A password less logic application with appointment booking functionality for Fast Startup',
      learned:
        'I learned to implement OAuth in Next JS, browser compatibility, and different packages.',
      skills: ['React', 'Next JS', 'TypeScript', 'SCSS', 'NextAuth'],
      blurHash:
        '|MM?~X070A9g~N^{oID;D--jRoR+j[odocRnjsa#^vIbIr%GWDWCj[aya#D=xot5WCWCRnxoWYaxxWWFayWEodocR-jsa#-jNLR+oeoKocRnj?j[D=xot5RlayWEoba$oIt3WEf6WEodoJa#ayWExpR-WCoLj@j?WXfPa#',
      link: 'https://meet.faststartup.io',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Lets Write.png',
      title: 'Lets Write',
      description:
        'The main idea of lets-write was to create an application where teachers can create rooms for tests where the students can join and solve the questions posted by the teacher.',
      learned:
        'Spend almost every day for a month making this project and I loved making this.',
      skills: [
        'React',
        'JavaScript',
        'MUI',
        'Redux',
        'Feathers JS',
        'Socket IO',
        'Node JS',
        'Express',
        'MongoDB',
        'Github OAuth',
      ],
      blurHash:
        '|06k#EFNR4ivwHIA9FxBv|=W01%M%MW=WBR.oeR*}$01xtbHS4RjNHxtt6~o0Mad-p.8V@D*xtxu}O4;-:xtozj@W=xtxt~V00oItSIUadIVbbt7}O9bxtjFxvj@NHxa%L~V4=xtxZxus:Ipt6xu;b4;%MM{M|t7bIjYxZ',
    },
    {
      type: 'WEB',
      img: '/assets/projects/WDT.png',
      title: 'Checklist App',
      description:
        'A development build for a project I made for a client. This a checklist app with projects, participants, notifications etc',
      learned:
        'I learned to implement OAuth, Firebase, Roles Based Access, Access Sharing, Animations with Framer Motion, Account Editing, Notification System',
      skills: ['React', 'JavaScript', 'MUI', 'Firebase', 'OAuth'],
      blurHash:
        '|4SY~x4n00R$IUWTRQ?bD%_3-;oyxutQWBs;M{ja9FD%E1IUInogj@t7%3_3tQ%f%MtQWVRiayM{4nE1M{M{RjRkt7ofxu~qx[xuxtozj?NGRjRj4nIURjRjRjRja}t7t7~q%MoyofaxayWBRjWBD%R%M{M{WAa#ofj[t7',
      link: 'https://wdt-lac.vercel.app',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Travel Advisor.jpeg',
      title: 'Travel Advisor',
      description:
        'Travel Advisor is an application which helps you find restaurants around you.',
      learned: 'Made this project 2 years ago to learn Google Maps API.',
      skills: [
        'React',
        'JavaScript',
        'MUI',
        'Google Maps',
        'Places API',
        'Restaurants API',
      ],
      blurHash:
        '|SJ[9j~p~WD%WCM{oz-;RkD+IUaxV@ozoffQofRj.AS6-;flRiadRif6oy4;tR%MazRjaxWBf6j[bKIUD%xat7kCofj]j[D+ofWAoft7aeWCofofjxRjD%ayt7xbkBM{ax9GafRjayj]fkt7M{j[t9RjRjt7aeofjuj[WB',
    },
    {
      type: 'WEB',
      img: '/assets/projects/React Dashboard.png',
      title: 'React Dashboard',
      description: 'A practice dasboard I created when I learned React.',
      learned:
        'I learned to use Tailwind to create Layouts, Syncfusion for charts',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Syncfusion'],
      blurHash:
        '|15YKPysIr_N.S.Tt,Qmo}_NPVKjt,adtmWYpci_S2X.y?ayTJWCf,x]jGTxbwrrl9b_Tdnhq]eTH?rqyXTJtSZ$ozV@ad8wxs%1MztljEm,XTVs9avfz:Mwt8V?oyZ$XSD4vg$fRPmRZhpIpdW;U^n3vzZ3n4ivn+l9gN',
      link: 'https://react-dashboard-six-lime.vercel.app',
    },
    {
      type: 'WEB',
      img: '/assets/projects/Whooly Craftz.png',
      title: 'Whooly Craftz',
      description:
        'Made this project 3 years ago while I was pretty new to the MERN stack. An e-commerce website with a custom backend and an admin panel.',
      learned:
        'I learned to create full-stack ecommerce website, creating an admin panel to manage data, regex searches.',
      skills: [
        'React',
        'JavaScript',
        'Materialize CSS',
        'Redux',
        'Node JS',
        'Express',
        'MongoDB',
      ],
      blurHash:
        '|JMjdh4-Rj^+f*-;IU-V%N00H@S2xuR*xtRjozac00-pR*V@IUIUx]RPj]~B?bkCIURjM{%MMxWX.9-Wt7IV-;t7aeSeRO8^J6s:jY-;ogNGxax]GGM|j[WXWBaxRjx]adyDoKaKt6MxM|a{t7Rj0eNtj@WCWBt6jbV@W=',
    },
  ] as T;
}
