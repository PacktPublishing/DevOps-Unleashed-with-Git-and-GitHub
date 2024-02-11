function leftPad(str: any, len: number, ch: string = ' '): string {
	// Ensure `str` is a string to prevent unexpected results
	str = String(str);
	// Repeat `ch` enough times to fill out the remaining length
	let pad = ch.repeat(Math.max(0, len - str.length));
	// Return the padded string
	return pad + str;
}

export = leftPad;