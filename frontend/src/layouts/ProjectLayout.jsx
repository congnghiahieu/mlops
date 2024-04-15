import { Outlet, useParams } from "react-router-dom";
import ProjectSidebar from "src/components/ProjectSidebar";

export default function ProjectLayout() {
    const params = useParams();

    return (
        <div className="relative flex">
            <ProjectSidebar projectID={params.id} />
            <div className="mx-auto w-full flex-grow lg:flex xl:px-2 -z-10 mt-2">
                {/* Left sidebar & main wrapper */}
                <div className="min-w-0 flex-1 w-full bg-white xl:flex p-5 rounded-md">
                    <div className="bg-white lg:min-w-0 lg:flex-1">
                        <Outlet className="outlet" />
                    </div>
                </div>
            </div>
        </div>
    )
}

