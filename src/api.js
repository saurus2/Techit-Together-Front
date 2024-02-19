export const SERVER_URL =
  "http://techit-env.eba-wdccmhiz.us-east-2.elasticbeanstalk.com";

export async function getMembers() {
  return (await fetch(`${SERVER_URL}/api/member/`)).json();
}

export async function getMember(member_id) {
  return (await fetch(`${SERVER_URL}/api/member/${member_id}`)).json();
}

export async function getTeams() {
  return (await fetch(`${SERVER_URL}/api/team/`)).json();
}

export async function getTeam(team_id) {
  return (await fetch(`${SERVER_URL}/api/team/${team_id}`)).json();
}

export async function getPendings(team_id, token) {
  return (
    await fetch(`${SERVER_URL}/api/pending/?team_id=${team_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
}

export async function getCourses() {
  return (await fetch(`${SERVER_URL}/api/course/`)).json();
}

export async function getCourse(course_id) {
  return (await fetch(`${SERVER_URL}/api/course/${course_id}`)).json();
}

export async function getLectures() {
  return (await fetch(`${SERVER_URL}/api/lecture/`)).json();
}

export async function getLecture(lecture_id) {
  return (await fetch(`${SERVER_URL}/api/lecture/${lecture_id}`)).json();
}

export async function getTakens() {
  return (await fetch(`${SERVER_URL}/api/taken/`)).json();
}

export async function getTeamTaken(team_id) {
  return (await fetch(`${SERVER_URL}/api/taken/?team_id=${team_id}`)).json();
}

export async function getMemberTaken(member_id) {
  return (await fetch(`${SERVER_URL}/api/taken/${member_id}`)).json();
}
