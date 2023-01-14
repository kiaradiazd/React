import PropTypes from 'prop-types';

export const FirstApp = ({ title, sudTitle, name }) => {

    return (
        <>
        <div data-testid="test-title">{ title }</div>

        <p>{ sudTitle }</p>
        <p>{ name }</p>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sudTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    name: 'Kiara Diaz',
    sudTitle: 'No hay sudtitulo',
    title: 'No hay titulo',
};