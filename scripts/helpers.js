function setTabData(data, tabName) {
    setHeader(tabName);
    document.getElementById("accordion-all").innerHTML = ""
    document.getElementById("accordion-interview").innerHTML = ""
    document.getElementById("accordion-reject").innerHTML = ""
    for (const [key, job] of data.entries()) {

        if (tabName === "all") {
            let post = makePostView(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
            continue;
        }
        if (job.status === tabName) {
            let post = makePostView(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
        }
        console.log(job);
        console.log("sdfdf")
        // if () {
        //     document.getElementById(`accordion-${tabName}`).innerHTML = "";
        //     document.getElementById(`accordion-${tabName}`).innerHTML = makeEmptyView()

        // }

    }
}

function setCount(data, currentTab = "all") {
    let reject = 0;
    let interview = 0;

    for (const job of data) {
        job.status === "interview" ? interview++ : job.status === "reject" ? reject++ : "";

    }
    (reject === 0 && currentTab === 'reject') ? document.getElementById("accordion-reject").innerHTML = makeEmptyView() : "";
    (interview === 0 && currentTab === "interview") ? document.getElementById("accordion-interview").innerHTML = makeEmptyView() : "" ;
    document.getElementById("card-interview-jobs").innerText = interview;
    document.getElementById("card-reject-jobs").innerText = reject;
    document.getElementById("card-all-jobs").innerText = data.length;
    document.getElementById("out-total").innerText = data.length;

}

function setHeader(tabName) {
    // console.log(tabName)

    document.getElementById("total-jobs").innerText = document.getElementById(`card-${tabName}-jobs`).innerText
    document.getElementById("heading").innerText = tabName;

}