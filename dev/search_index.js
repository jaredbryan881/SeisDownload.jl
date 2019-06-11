var documenterSearchIndex = {"docs":
[{"location":"#SeisDownload.jl-1","page":"Home","title":"SeisDownload.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download seismic waveform from data server.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Download from earthquake data center with multiple processors\nAll data (metadata, waveform, fft, ...) is saved in the form of SeisData structure with SeisIO.jl®.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Then from the Julia command prompt:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Press ] to enter pkg.\nType or copy: add https://github.com/kura-okubo/SeisDownload.jl\nPress backspace to exit pkg.\nType or copy: using Pkg; Pkg.build(\"SeisDownload\"); using SeisDownload","category":"page"},{"location":"#Example-1","page":"Home","title":"Example","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"You can download data using seisdownload: to run the example script:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"cp EXAMPLE/ somewhere and cd EXAMPLE/Noise_BP\ntype julia exec.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"** Please specify number of processors with -p**","category":"page"},{"location":"#","page":"Home","title":"Home","text":"More information; see EXAMPLE directory.","category":"page"},{"location":"#Installation-Q-and-A-1","page":"Home","title":"Installation Q&A","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Please run with obspy enviroment.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Anaconda environment is useful; see link. This package is stable with python 3.7.3.","category":"page"},{"location":"Functions/#SeisDownload.jl-1","page":"Functions","title":"SeisDownload.jl","text":"","category":"section"},{"location":"Functions/#","page":"Functions","title":"Functions","text":"seisdownload","category":"page"},{"location":"Functions/#SeisDownload.seisdownload","page":"Functions","title":"SeisDownload.seisdownload","text":"ParallelSeisrequest(InputDict::Dict MAX_MEM_PER_CPU::Float64=1.0)\n\nRequest seismic data with Multiple cores.\n\nArguments\n\nInputDict    : dictionary which contains request information\nMAX_MEM_PER_CPU : maximum available memory for 1 cpu GB\n\n\n\n\n\n","category":"function"}]
}