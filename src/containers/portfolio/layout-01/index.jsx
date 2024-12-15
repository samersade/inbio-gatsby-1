import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import PortfolioCard from "@components/portfolio-card/layout-01";
import { ItemType, SectionTitleType } from "@utils/types";

const PortfolioArea = ({ data, id }) => {
    return (
        <div
            className="rn-portfolio-area rn-section-gap section-separator"
            id={id}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                align="center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="500"
                                data-aos-once="true"
                            />
                        )}
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {data?.items?.map((item) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30"
                        >
                            <PortfolioCard
                                title={item.title}
                                id={item.id}
                                slug={item.slug}
                                category={item.category}
                                path={item.path}
                                likeCount={item.likeCount}
                                image={item.images?.[0]}
                                content={item.content}
                                texts={item.texts}
                                readingTime={item.readingTime}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PortfolioArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

PortfolioArea.defaultProps = {
    id: "portfolio",
};

export default PortfolioArea;
