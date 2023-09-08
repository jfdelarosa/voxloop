export function getRelativeTime(date: Date | string): string {
	const now = new Date();
	const diffInMilliseconds = now.getTime() - new Date(date).getTime();

	const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

	if (diffInMilliseconds < 60000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 1000), 'second');
	} else if (diffInMilliseconds < 3600000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 60000), 'minute');
	} else if (diffInMilliseconds < 86400000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 3600000), 'hour');
	} else if (diffInMilliseconds < 604800000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 86400000), 'day');
	} else if (diffInMilliseconds < 2419200000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 604800000), 'week');
	} else if (diffInMilliseconds < 29030400000) {
		return rtf.format(-Math.floor(diffInMilliseconds / 2419200000), 'month');
	} else {
		return rtf.format(-Math.floor(diffInMilliseconds / 29030400000), 'year');
	}
}
