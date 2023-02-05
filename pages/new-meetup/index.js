const { default: NewMeetupForm } = require("@/components/meetups/NewMeetupForm");




function NewMeetUpPage() {


    function addMeetUpHandler (newMeetUp){
        console.log(newMeetUp);
    }

    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />

}


export default NewMeetUpPage;