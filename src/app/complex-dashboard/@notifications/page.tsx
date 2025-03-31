
import { Card } from "@/app/components/cards";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>



        <Link className="bg-green-400" href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}