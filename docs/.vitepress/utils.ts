export const postDateFormatter = Intl.DateTimeFormat('en-GB', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
});

export function formatPostDate(date: Date | string) {
    if (typeof date == 'string') date = new Date(date);
    return postDateFormatter.format(date);
}

export function formatPostDateDetail(date: Date | string) {
    if (typeof date == 'string') date = new Date(date);
    return `ngày ${ date.getDate() } tháng ${ date.getMonth() + 1 }, ${ date.getFullYear() }`
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}