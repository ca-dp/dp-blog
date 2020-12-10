import Link from "next/link";
import {members} from "@members";
import {getMemberPath} from "@src/utils/helper";
import {Member} from "@src/types";

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {shuffle<Member>(members).map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.name)}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
