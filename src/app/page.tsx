import Image from "next/image";
import { getAllActualities } from "@/utils/actualities";
import { cn } from "@/lib/utils";

export default async function Home() {
  const actualities = await getAllActualities();
  return (
      <main className={cn("bg-amber-500")}>
        <p className={cn("m-6,text-3xl","font-bold", "underline", "bg-red-600")}>
        hey how are you
      </p>
        <div className={""}>
          <p className="text-3xl font-bold underline bg-lime-500">
            Get started by editing&nbsp;
            <code className={""}>src/app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={""}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        {actualities.map((actuality, index) => (
          <div key={index}>
            <h2>{actuality.title}</h2>
            <p>{actuality.date?.toString()}</p>
            <div>{JSON.stringify(actuality.description?.json)}</div>
            {actuality.mediaCollection.items.map((item, index) => (
              <img key={index} src={item.url} alt={item.title} />
            ))}
            {actuality.location && (
              <p>
                Location: {actuality.location.lat}, {actuality.location.lon}
              </p>
            )}
          </div>
        ))}

        <div className={""}>
          <Image
            className={"px"}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={""}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    
  );
}
