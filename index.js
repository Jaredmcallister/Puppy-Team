//console.log(`testing`)
//fetch the roster of puppies
//observe the puppies details
//add each team of puppies to the main page 
//make it where each team of puppies is clickable and it will direct to a page where it's just that team and all of the puppies
//be able to click each puppy and have it direct to a page that has each indivial puppies information
// install a back button that will redirect back to the main page that has all team of each puppies

//make it pretty with CSS
//console.log (`this isn't working why isn't this working?`);
const getThePuppies = async () => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/teams`);
  const responseJson = await response.json();
  //console.log(responseJson.data.teams);
  const puppyTeams = responseJson.data.teams
 

  //for each conversion
  //changing it to let instead of const didnt work
  puppyTeams.forEach((team) => {
    //returning it here breaks it
   //return team.name;
 
    const puppyLi = document.createElement(`li`)
    
    puppyLi.innerHTML = `<h3 id="${team.id}"> ${team.name}</h3>`
    //puppyLi.setAttribute("id", team.id)
    const puppyTeam = document.querySelector(`ol`)
    puppyTeam.appendChild(puppyLi);
   
  })
  document.querySelectorAll(`li`).forEach((singleTeamLI) => {
      singleTeamLI.addEventListener(`click`, async (event) => {
     
        const teamID = event.target.getAttribute("id")
        
      
      const foundTeam = puppyTeams.find((individualTeam) => { 
        return individualTeam.id === Number(teamID)
        
      })
      console.log (foundTeam.players);

      //document querey selector 'ol'
      //create a document create element to make new Lis for each player depend on the team clicked
      //append the newly created li to the html using replace children

       document.querySelector(`ol`)
       const puppyRoster = document.createElement(`li`)
       
       //puppyRoster.forEach(() => {
      const puppyRosterAdded = puppyRoster.map 
      
       //puppyRosterAdded.append(foundTeam.players.join(`,`)) () 


       //console.log (puppyRoster);
      
      })})
    };
  

//do an event listener click on each new created LI?
getThePuppies()
