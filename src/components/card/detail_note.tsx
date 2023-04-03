import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";

const DetailNoteCard: React.FC<{
  title: string;
  createdAt: string;
  body: string;
}> = ({ body, createdAt, title }) => {
  return (
    <div className="mx-auto p-5 py-12">
      <div className="mb-4 flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-slate-700 ">{title}</h1>
        <span className="text-xs">{showFormattedDate(createdAt)}</span>
      </div>

      <article className="prose prose-lg prose-slate">
        <p>{body}</p>
      </article>
    </div>
  );
};

DetailNoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default DetailNoteCard;
