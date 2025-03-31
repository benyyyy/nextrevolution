
import { Card } from "@/app/components/cards";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link className="bg-blue-300" href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}