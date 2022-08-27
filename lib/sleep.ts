export const sleep = (amount: number = 500) => new Promise<void>((res) => setTimeout(() => res(), amount));
