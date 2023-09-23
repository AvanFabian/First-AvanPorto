const SectionWrapper = (Component: any, IdName: string) => 
function HOC() {
    return (
        <section
            className='paddingAll max-w-7xl
            mx-auto relative z-0'
        >
            <span className="hash-span" id={IdName}>
                &nbsp;
            </span>
            <Component />
        </section>
    )
}

export default SectionWrapper