export default function getCustomDate(milliseconds: number): string {
    const dateArray: string[] = new Date(milliseconds).toDateString().split(" ");
    return `${dateArray[2]} ${dateArray[1]}, ${dateArray[3]}`;
}
