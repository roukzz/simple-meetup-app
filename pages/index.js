
import MeetupList from "@/components/meetups/MeetupList"



const DUMMY_MEETUPS = [{
    id:'m1',
    title: 'A First Mettup',
    image: 'https://www.meteorologiaenred.com/wp-content/uploads/2022/01/islas-fiji-1024x576.jpg.webp',
    address: 'some dummy address 1234 st some city',
    description: 'this is a first'
},
{
    id:'m2',
    title: 'A Second Mettup',
    image: 'https://www.meteorologiaenred.com/wp-content/uploads/2022/01/islas-fiji-1024x576.jpg.webp',
    address: 'some dummy address 1234 st some city',
    description: 'this is a Second meetup'
}
]

function HomePage(props){

    

    

    return <MeetupList meetups={DUMMY_MEETUPS} />
}


// // runs on the server after deployment
// export async function getServerSideProps(context){

//     const req = context.req; 
//     const res = context.res;

//     // fetch data from an api
//     return {
//         props: {
//             meetups:DUMMY_MEETUPS
//         }
//     };
// }

// // this code is private, it will never reach the user machine,
// // therfore you can have a secure conection to a db
// // this function runs in the building process
// export async function getStaticProps() {

//     // fetch data from an API

//     // always need to return an object and a props key
//     return {
//         // this props is the props that the HomePage receive at the top
//         props:{
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     };

// }

export default HomePage