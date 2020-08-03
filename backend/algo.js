// Basic Algorithm

function basicAlgo(lectures) {
    let ans = []
    for (const lecture of lectures) {
        lecture.lectureId = parseInt(lecture.lectureId);
        lecture.facultyId = parseInt(lecture.facultyId);
        lecture.semesterId = parseInt(lecture.semesterId);
        lecture.dayOfWeek = parseInt(lecture.dayOfWeek);
        if (ans.length == 0) {
            ans.push([lecture]);
        } else {
            ans = checkHallAvailability(ans, lecture);
        }
    }
    return {"result": ans};
}

function checkHallAvailability(ans, lecture) {
    // For all current halls
    for (let i=0; i<ans.length; i++) {
        if (!checkOverlap(lecture, ans[i])) {
            ans[i].push(lecture)
            return ans;
        }
    }
    ans.push([lecture]);
    return ans;
}

function checkOverlap(lecture, hall) {
    let currentStart = parseInt(lecture.startTime);
    let currentEnd = parseInt(lecture.endTime);
    // For each lecture in the current hall
    for (const indvLect of hall) {
        if (!(currentEnd < parseInt(indvLect.startTime) || currentStart > parseInt(indvLect.endTime))) {
            return true;
        }
    }
}

// Advanced Algorithm
function advancedAlgo() {

}

module.exports = {basicAlgo, advancedAlgo}
