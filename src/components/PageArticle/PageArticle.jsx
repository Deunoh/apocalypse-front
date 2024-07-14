import PropTypes from 'prop-types';

// here is the container of article detail

const PageArticle = ({ children }) => <main className="page">{children}</main>;

PageArticle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageArticle;
