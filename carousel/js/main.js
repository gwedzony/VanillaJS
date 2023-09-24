const $profile_pic = document.querySelector(".profile-pic");
const $name = document.querySelector(".name");
const $job_title = document.querySelector(".job-title");
const $description = document.querySelector(".desc");

const $prev_button = document.querySelector(".prev-btn");
const $next_button = document.querySelector(".next-btn");
const $random_button = document.querySelector(".random-button");

const persons = [
    {
        name: "Susan Smith",
        jobTitle: "web developer",
        description:
            "I'm baby meggings twee health goth +1." +
            " Bicycle rights tumeric chartreuse before they sold out chambray pop-up. " +
            "Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        profilePic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
        name: "Anna Johnson",
        jobTitle: "web designer",
        description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. " +
            "Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel " +
            "pin fashion axe.photo booth jean shorts artisan narwhal.",
        profilePic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        name: "Peter Jones",
        jobTitle: "intern",
        description:
            "Sriracha literally flexitarian irony, vape marfa unicorn." +
            "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb " +
            "marfa hell of pabst raclette post-ironic jianbing swag.",
        profilePic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        name: "Bill Anderson",
        jobTitle: "the boss",
        description:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. " +
            "VHS farm-to-table schlitz, edison bulb pop-up 3 " +
            "wolf moon tote bag street art shabby chic.y",
        profilePic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    }
]

let index = 0;
function cardChange(index) {
    $name.innerHTML = persons[index].name;
    $job_title.innerHTML = persons[index].jobTitle;
    $description.innerHTML = persons[index].description;
    $profile_pic.src = persons[index].profilePic;
}


$prev_button.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
        cardChange(index);
    }
});

$next_button.addEventListener('click', () => {
    if (index < (persons.length - 1)) {
        index += 1;
        cardChange(index);
    }
});

$random_button.addEventListener('click', () => {
   index = Math.floor(Math.random() * 4);
   cardChange(index);
})
