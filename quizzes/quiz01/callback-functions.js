// Your code here.
const fetchAndShowTweets = async(searchTerm, callback)=>{
    const baseUrl = 'https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=${searchTerm}';
    const responding = await fetch(url);
    const data = await responding.json();

    callback(data);

    const printTwitterUsers = mainArray =>{
        console.log("\n printing twitter users....");
        mainArray.array.forEach(users => {
            console.log(users.username)
        });
        
        
    }
    const showMostPopularTweet = tweetsArray =>{
        console.log("\n printing twitter users....");
        tweetsArray.array.forEach(popTweet => {
            console.log(popTweet.mostPop)
        });

        fetchAndShowTweets('dogs',printTwitterUsers);
        fetchAndShowTweets(showMostPopularTweet);
    }
}