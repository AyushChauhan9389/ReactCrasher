import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ButtonExample() {
    return (
        <div className="flex gap-4">
            <Link to="/hooks/useRef">
                <Button variant="outline">UseRef</Button>
            </Link>
            <Link to="/hooks/useState">
                <Button variant="outline">UseState</Button>
            </Link>
            <Link to="/hooks/useEffect">
                <Button variant="outline">UseEffect</Button>
            </Link>
        </div>
    )
}