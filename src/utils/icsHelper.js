const DOMAIN = "https://shakeabi.github.io/sscheduler"
export const getIcsDownloadLink = (data) => {
    const url = DOMAIN + "/ics.html?id="+btoa(JSON.stringify(data));
    return url;
}