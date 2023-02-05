

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props){


    return <MeetupDetail
    image = {props.meetupData.image}
    title={props.meetupData.title}
    address= {props.meetupData.address}
    decription={props.meetupData.description}
    />
}

export async  function getStaticPaths(){

    return {
        fallback: false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                },
            },
            {
                params:{
                    meetupId:'m2',
                },
            },
        ]
    }
}

export async function getStaticProps(context){

    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props:{
            meetupData:{
                image:"https://www.meteorologiaenred.com/wp-content/uploads/2022/01/islas-fiji-1024x576.jpg.webp",
                id:meetupId,
                title: 'fsdagfsd',
                address:'gsdgsfd',
                description: 'gsfdf'

            }
        }
    }
}
export default MeetupDetails;