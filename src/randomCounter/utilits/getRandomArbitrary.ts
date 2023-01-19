export const GetRandomArbitrary = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}
