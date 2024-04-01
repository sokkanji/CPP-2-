function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((people, i) => people !== completion[i]);
}
