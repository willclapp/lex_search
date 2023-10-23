import csv
from os import listdir
from os import remove
import shutil

def move_filler(input_csv, input_dir, out_dir):
    # First, create list of all files that should be there
    # by reading through the CSV
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if line[0] != 'index':
                fname = line[1] + "_" + line[-1] + "_AnF.wav"
                shutil.copyfile(input_dir+fname, out_dir+fname)

filler_csv = "./trials_filler.csv"
anchor_dir = "/Users/willclapp/Desktop/ART/artclass/project/recording/processed/AnF/"
anchor_out = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1/audio/AnF/"
# move_filler(filler_csv, anchor_dir, anchor_out)

def move_control(input_csv, input_dir, out_dir):
    # First, create list of all files that should be there
    # by reading through the CSV
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if line[0] != 'index':
                fname = line[3] + "_" + line[6] + "_AnF.wav"
                shutil.copyfile(input_dir+fname, out_dir+fname)

critical_csv = "./trials_critical.csv"
# move_control(critical_csv, anchor_dir, anchor_out)

def move_critical(input_csv, input_dir, out_dir):
    speakers = ['AIF1', 'IF1', 'IF3', 'IM1', 'IM2']
    s_ind = []
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if line[0] == 'index':
                for s in speakers:
                    s_ind.append(line.index(s + '_tag'))
            else: 
                for i in range(len(speakers)):
                    tag = tuple(map(str, line[s_ind[i]].split('_')))
                    flead = speakers[i] + "/spliced/" + line[-1] + '/'
                    fname = line[3] + '_' + tag[0] + '_' + speakers[i] + '_' + tag[1] + '_AnF_' + line[-1] + '.wav'
                    shutil.copyfile(input_dir+flead+fname, out_dir+'/'+speakers[i]+'/'+fname)

indir = "/Users/willclapp/Desktop/ART/artclass/project/recording/splicing/"
outdir = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1/audio/"
move_critical(critical_csv, indir, outdir)