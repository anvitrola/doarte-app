export const calculateDeadline = (createdAt, deadline) => {
    const creationDateInMs =  createdAt.getTime();
    const deadlineDateInMs =  deadline.getTime();

    const timeDiffInMs = deadlineDateInMs - creationDateInMs;
    const remainingDaysInMs = timeDiffInMs - Date.now();
    
    const dayInMs = 1000 * 60 * 60 * 24;
    const remainingDays = Math.floor(remainingDaysInMs/dayInMs);

    return remainingDays;
};