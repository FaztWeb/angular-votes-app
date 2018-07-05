export class Link {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes++;
    }

    voteDown(): void {
        this.votes--;
    }

    formatDomain(): string {
        try {
            const domain: string = this.link.split('//')[1];
            return domain.split('/')[0];
        } catch (err) {
            return null;
        }

    }
}